import React, { useEffect } from "react";
import { useState } from 'react';
import logo from "../../assests/images/login-img.png"
import google from "../../assests/images/google.svg"
import apple from "../../assests/images/apple.png"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { VerificationForm } from "./verify-otp";

export const Login = ({setIsLogged}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showVerification, setShowVerification] = useState(false);
    const [error, setError] = useState({
        email:'',
        password:''
    })

    const togglePasswordVisibility = (e) => {
      e.preventDefault()
      setPasswordVisible(!passwordVisible);
    };
    const generateOtp = () => {
        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
        localStorage.setItem('otp', newOtp)
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        const storedEmail = "example@gmail.com"; 
        const storedPassword = "1234";  
        let valid = true;
        const errors = { email: '', password: '' };
    
        if (email !== storedEmail) {
          errors.email = 'Incorrect email address';
          valid = false;
        }
        if (password !== storedPassword) {
          errors.password = 'Incorrect password';
          valid = false;
        }
    
        setError(errors);
    
        if (valid) {
          setIsLogged(true)
          setShowVerification(true)
          generateOtp()
        }

      };
  return (
    <div className="h-screen overflow-hidden">
        <h2 className="m-4 md:m-10 font-bold">Your Logo</h2>
        <div className="flex lg:px-16 xl:px-52 md:px-10 px-2 min-h-screen">
            <div className="hidden lg:flex  w-1/2 flex-col justify-center mt-28">
                <h1 className="text-4xl font-bold mb-4">Sign in to</h1>
                    <p className="text-2xl font-medium mb-10">Lorem Ipsum is simply</p>
                    <div className="flex">
                        <p className="text-sm">
                            If you don't have an account, register 
                            <span className="block">
                            you can <a href="" className="text-[#4C49ED] font-semibold"> Register here!</a>
                            </span>
                        </p>
                        <div>
                            <img
                                src={logo}
                                alt="Illustration"
                                className="w-96 -mt-20"
                            />
                        </div>
                    </div>
            </div>
            {!showVerification ? (
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:mt-36 md:px-0 px-2">
                <form className="bg-white rounded-lg lg:w-2/3 md:[w-80%] w-full">
                <h2 className="text-2xl font-semibold mb-6">Sign in</h2>

                    <div className="mb-4">
                         <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email or username"
                            className="w-full border rounded-lg p-4 text-sm bg-[#E7EDFF] text-[#4C49ED] outline-none placeholder-[#2D60FF80]"
                        />
                        {error.email && (
                            <p className="text-red-500 text-sm mt-2">{error.email}</p>
                        )}
                    </div>

                     <div className="mb-10 relative">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full border rounded-lg p-4 text-sm bg-[#E7EDFF] text-[#4C49ED] outline-none placeholder-[#2D60FF80]"
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute right-4 transform text-xl text-[#2D60FF80] cursor-pointer top-4"
                        >
                            {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                        {error.password && (
                            <p className="text-red-500 text-sm mt-2">{error.password}</p>
                        )}
                        <p className="text-right text-sm text-gray-400 mt-2 cursor-pointer select-none">
                            Forgot password?
                        </p>
                    </div>

                    <button 
                    className="w-full bg-indigo-700 text-white rounded-lg py-4 font-semibold hover:bg-indigo-900 transition"
                    type="submit"
                    onClick={handleSubmit}
                    >
                        Login
                    </button>
                    <div className="text-gray-400 mt-10 justify-self-center">
                        <p className="mb-10">or continue with</p>
                        <div className="flex">
                            <a href="https://www.apple.com/?cid=oas-us-domains-applle.com"
                            className="mr-4"
                            target="_blank"
                            >
                                <img 
                                src={apple} 
                                alt="apple" 
                                className="bg-white w-10 h-10" 
                                />
                            </a>
                            <a href="https://www.google.com/"
                            target="_blank"
                            >
                                <img 
                                src={google} 
                                alt="google" 
                                className="w-10 h-110"/>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
            ) : (
                <VerificationForm />
            )}
        </div>
    </div>
  );
};

export default Login;
