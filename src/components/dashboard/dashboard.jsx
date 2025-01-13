import BankingDashboard from "./bank-dashboard"
import { Header } from "./header"
import { Sidebar } from "./sidebar"

export const Dashboard = () => {
    return(
        <div className="flex bg-[#E7EDFF] h-screen">
            <Sidebar />
            <div className="w-full overflow-y-auto">
                <Header />
                <BankingDashboard />
            </div>
        </div>
    )
}