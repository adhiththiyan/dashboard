import setting from "../../assests/images/setting.svg"
import { CiSearch } from "react-icons/ci";
import notify from "../../assests/images/notify.svg"
import profile from "../../assests/images/profile.png"

export const Header = () => {
    return(
        <div className="bg-white w-full flex justify-between items-center py-6 border-l border-l-gray-200 px-8 sticky top-0 shadow-md">
            <h1>Overview</h1>
            <div className="flex items-center gap-8">
                <div className="relative">
                    <CiSearch className="h-5 w-5 absolute top-1/2 -translate-y-1/2 text-gray-500 left-4"/>
                    <input 
                    type="text" 
                    placeholder="Search for Something"
                    className="rounded-full bg-[#EFF3F9] px-4 py-3 pl-16 outline-none"
                    />
                </div>
                {/* <span className="rounded-full p-2 bg-[#EFF3F9]">
                    <img src={setting} alt=""/>
                </span> */}
                <img src={notify} alt=""/>
                <div>
                    <img src={profile} alt="" className="w-10 h-10 object-center rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}