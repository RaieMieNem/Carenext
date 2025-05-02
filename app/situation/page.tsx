import Link from 'next/link';
import Header from '../_sections/header';
import Footer from '../_sections/footer';


const SituationPage = () => {
    return (
        <>
        <Header/>
        <Situation/>
        <Footer/>
        </>
    )
}

const Situation = () => {
    return(
        <div className="flex flex-col justify-center items-center w-full h-full gap-20 text-xl 2xl:text-3xl"> 
            <div>
                Situation Page
            </div>
            <Link href="situation/new">
                <button className="cursor-pointer [font-family:var(--inter)] text-xl 2xl:text-3xl mt-4 bg-[rgba(var(--primary-color))] text-[rgba(var(--secondary-color))] py-2 px-4 2xl:py-3 2xl:px-6 rounded-3xl hover:bg-[rgba(var(--third-color))] hover:text-[rgba(var(--primary-color))] transition-transform duration-300 hover:-translate-y-1">
                    Créer une situation
                </button>
            </Link>
        </div>
    )
}

export default SituationPage