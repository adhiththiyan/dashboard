import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

export const VerificationForm = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState({ otp: '' });
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  const generateOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    setTimer(30);
    return newOtp;
  };
  
    useEffect(() => {
        const initOtp = localStorage.getItem('otp')
        if (initOtp) {
            setGeneratedOtp(initOtp);
            alert(`Your OTP is: ${initOtp}`);
          } else {
            generateOtp();
          }
    }, [])

  useEffect(() => {
    if (generatedOtp) {
      const interval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [generatedOtp]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    
    if (otp === generatedOtp) {
        navigate('/dashboard'); 
    } else {
      setError({ otp: 'Incorrect OTP. Please try again.' });
    }
  };

  const handleResendOtp = () => {
    const newOtp = generateOtp();
    alert(`Your new OTP is: ${newOtp}`);
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:mt-36 md:px-0 px-2">
        <form className="lg:w-2/3 md:[w-80%] w-full" onSubmit={handleVerifyOtp}>
        <h2 className="text-2xl font-semibold mb-6">Verify OTP</h2>
        <div className="mb-6">
            <input
            type="text"
            id="otp"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter 4-digit OTP"
            className="w-full border rounded-lg p-4 text-sm bg-[#E7EDFF] text-[#4C49ED] outline-none placeholder-[#2D60FF80]"
            />
            {error.otp && (
            <p className="text-red-500 text-sm mt-2">{error.otp}</p>
            )}
        </div>

        <button 
            type="submit"
            className="w-full bg-indigo-700 text-white rounded-lg py-4 font-semibold hover:bg-indigo-900 transition"
        >
            Verify
        </button>

        <div className="text-center mt-6">
            <p className="text-gray-500">
            <button 
                type="button"
                className="text-indigo-700 font-semibold ml-2"
                onClick={handleResendOtp}
            >
                Resend OTP
            </button>
            </p>
        </div>

        <div className="text-center mt-6">
            {timer > 0 ? (
            <p className="text-sm text-gray-500">OTP expires in {timer} seconds</p>
            ) : (
            <p className="text-sm text-red-500">OTP expired. Please request a new one.</p>
            )}
        </div>
        </form>
    </div>
  );
};
