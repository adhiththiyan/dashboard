import { Link } from "react-router-dom"
import bank from "../../assests/images/bank.png"
import home from "../../assests/images/home.svg"
import account from "../../assests/images/user.svg"
import setting from "../../assests/images/setting.svg"
import trans from "../../assests/images/trans.svg"
import bulb from "../../assests/images/trans.svg"
import credit from "../../assests/images/credit.svg"
import money from "../../assests/images/money.svg"
import ser from "../../assests/images/ser.svg"
import inves from "../../assests/images/inves.svg"

const sideLink = [
    {img: home, name: "Dashboard"},
    {img: money, name: "Transactions"},
    {img: account, name: "Accounts"},
    {img: inves, name: "Investments"},
    {img: credit, name: "Credit cards"},
    {img: trans, name: "Loans"},
    {img: ser, name: "Services"},
    {img: bulb, name: "My Privileges"},
    {img: setting, name: "Settings"},   
]
export const Sidebar = () => {
    return(
        <div className="w-[15%] bg-white p-8 relative">
            <div className="flex gap-4 items-center mb-10">
                <img src={bank} alt="banklogo" />
                <span className="font-medium text-xl">Bank Dash.</span>
            </div>
            <div>
                <ul className="">
                    {sideLink.map((item, ind) => (
                        <li className="flex gap-6 items-center text-gray-500 mb-8" key={ind}>
                            <img src={item.img} alt={item.name} />
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-6 items-center text-gray-500 absolute bottom-10">
                <img src={setting} alt="" />
                <Link to="/login">Logout</Link>
            </div>
        </div>
    )
}