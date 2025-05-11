import Link from 'next/link';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

const SituationProjet = () => {
    return (
        <>
        <Header/>
        <Projet/>
        <Footer/>
        </>
    )
}

const Projet = () => {
    return(
        <div className="flex flex-col justify-center items-center w-full h-full gap-20 text-xl 2xl:text-3xl"> 
            <div>
                Projet Page
            </div>
            <Link href="projets/new">
                <button className="cursor-pointer [font-family:var(--inter)] text-xl 2xl:text-3xl mt-4 bg-[rgba(var(--primary-color))] text-[rgba(var(--secondary-color))] py-2 px-4 2xl:py-3 2xl:px-6 rounded-3xl hover:bg-[rgba(var(--third-color))] hover:text-[rgba(var(--primary-color))] transition-transform duration-300 hover:-translate-y-1">
                    Créer un un projet
                </button>
            </Link>
        </div>
    )
}

export default SituationProjet;