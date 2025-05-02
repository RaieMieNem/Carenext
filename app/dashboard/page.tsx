import Header from "../_sections/header"
import Footer from "../_sections/footer"

const DashboardPage = () => {
    return (
        <>
        <Header/>
        <Dashboard/>
        <Footer/>
        </>
    )
}

const Dashboard = () => {
    return(
        <div className="flex flex-col justify-center items-center w-full h-full gap-20 text-xl 2xl:text-3xl bg-black"> 
            <div className="text-white">
                Bienvenue sur le Dashboard
            </div>
            <div className="text-white">
                Tu es bien connecté !
            </div>

        </div>
    )
}

export default DashboardPage