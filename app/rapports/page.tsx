import Link from 'next/link';
import Header from '../_sections/header';
import Footer from '../_sections/footer';


const Rapport = () => {
    return (
        <>
        <Header/>
        <Rapport_i/>
        <Footer/>
        </>
    )
}

const Rapport_i = () => {
    return(
        <div className="flex flex-col justify-center items-center w-full h-full gap-20 text-xl 2xl:text-3xl"> 
            <Link href="rapports/new">
                <button className="cursor-pointer [font-family:var(--inter)] text-xl 2xl:text-3xl mt-4 bg-[rgba(var(--primary-color))] text-[rgba(var(--secondary-color))] py-2 px-4 2xl:py-3 2xl:px-6 rounded-3xl hover:bg-[rgba(var(--third-color))] hover:text-[rgba(var(--primary-color))] transition-transform duration-300 hover:-translate-y-1">
                    Mes Rapports
                </button>
            </Link>
        </div>
    )
}

export default Rapport;