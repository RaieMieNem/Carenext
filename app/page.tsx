'use client'
import Header from "./_sections/header"
import Footer from "./_sections/footer";
import Image from 'next/image';
import Link from 'next/link';
import {Typewriter, Cursor} from "react-simple-typewriter"

/* // STRUCTURE DE LA PAGE 
    - Header
    - Main
      --Hero
      --Features
      --Details
    - Footer
*/

//**********  PAGE-COMPLETE ********** //
export default function Home() {
  return (
    <>
      <Header />
      <Main/>
      <Footer/>
    </>
  );
}

//Header + Footer définis dans components


//**********  MAIN-SECTIONS ********** //
const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-white">
      <div className="w-full flex flex-col items-center">
            <MainHero/>
            <MainFeatures/>
            <MainDetails/>
      </div>
    </main>
  );
};


//**********  MAIN-HERO ********** //
const MainHero = () => {
    return(
        <div className="flex flex-col items-center justify-between gap-6 text-center w-full [font-family:var(--Kaisei)] 
        bg-[url('/Hero_background_2.jpg')] bg-cover bg-no-repeat bg-[rgb(var(--beige))] 
        h-[300px] 2xl:h-[500px]">

            <div className="flex flex-col items-center gap-3 sm:gap-6">
                <p className="pt-10 2xl:pt-20  text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-medium  text-[rgba(var(--third-color))]">
                    Etudiez votre 
                    <Typewriter typeSpeed={50} words={[" projet locatif"," capacité d'emprunt"," mensualité"," rendement locatif"," fiscalité"," imposition"]} loop={0}/>
                    <span><Cursor/> </span></p>
                <p className="hidden sm:block text-base lg:text-lg 2xl:text-xl text-[rgba(var(--secondary-color))]">
                    Care Invest, votre outil de simulations pour maîtriser<br />
                    les enjeux fiscaux et financiers de votre projet locatif
                </p>
                <p className="text-sm sm:hidden text-[rgba(var(--secondary-color))] font-semibold">
                    Care Invest<br />Maitrisez votre projet locatif
                </p>
            </div>
            <div className="text-center">
                <p className="pb-5 text-base lg:text-xl 2xl:text-2xl font-medium text-[rgba(var(--third-color))]">Soyez maître de votre projet en 3 étapes</p>
            </div>
        </div>
    )
}

//**********  MAIN-FEATURES ********** //
const MainFeatures = () => { 
    return (
      <div className="flex flex-col justify-center items-center bg-[rgba(var(--primary-color))] w-full pb-10 px-3 lg:px10 2xl:pb-15">
        <div className="grid grid-cols-1 md:grid-cols-3 w-[60%] md:w-full items-center justify-center bg-[rgba(var(--primary-color))] max-w-[1000px] 2xl:max-w-[2000px] gap-10 lg:gap-25">
          {featuresData.map(({ title, btnText, link, items }) => (
            <div key={title} className="border-t-2 border-[rgba(var(--secondary-color),0.3)] md:border-0 flex flex-col items-center justify-between [font-family:var(--Kaisei)] text-[rgba(var(--secondary-color))] pt-6 gap-3 2xl:gap-5">
                <div className="text-center">
                    <p className="pb-2 text-xs 2xl:text-base font-medium">Maître de</p>
                    <p className="text-xl 2xl:text-2xl 2xl:pb-3 font-semibold">{title}</p>
                </div>
  
              <div className="flex flex-col gap-3 2xl:gap-6 2xl:pb-2">
                    {items.map(({ src, text }) => (
                        <div key={text} className="flex items-center gap-4">
                            <Image src={src} alt={text} width={18} height={18} className="2xl:w-[32px] 2xl:h-[32px]"/>
                            <p className="text-xs 2xl:text-base">{text}</p>
                        </div>
                    ))}
              </div>
  
              <Link href={link}>
                    <button className="cursor-pointer [font-family:var(--inter)] text-xs 2xl:text-base mt-4 bg-[rgba(var(--secondary-color))] text-[rgba(var(--primary-color))] py-2 px-4 2xl:py-3 2xl:px-6 rounded-3xl hover:bg-[rgba(var(--third-color))] transition-transform duration-300 hover:-translate-y-1">
                    {btnText}
                    </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};

// Comme la structure pour chaque feature est la même, 
// je la définis une seule fois en modifiant juste le texte, et les logos 

//**********  MAIN-FEATURES-DATA ********** //
const featuresData = [
    {
      title: 'Ma situation',
      btnText: 'Créer une situation',
      link: '/situation/new',
      items: [
        { src: '/features/coin.svg', text: "Ma capacité d\'emprunt" },
        { src: '/features/taux.svg', text: "Mon taux d\'endettement" },
        { src: '/features/mensualite.svg', text: "Ma mensualité" },
      ],
    },
    {
      title: 'Mon projet',
      btnText: 'Créer un projet',
      link: '/projets/new',
      items: [
        { src: '/features/rendement.svg', text: 'Rendement de mon projet' },
        { src: '/features/imposition.svg', text: 'Mon imposition' },
        { src: '/features/tresorerie.svg', text: 'Mon gain/effort de trésorerie' },
      ],
    },
    {
      title: 'Ma fiscalité',
      btnText: 'Comparer les régimes fiscaux',
      link: '/simulateurs',
      items: [
        { src: '/features/visibilite.svg', text: 'Ma visibilité des projets' },
        { src: '/features/taux.svg', text: 'Mes différents régimes fiscaux' },
        { src: '/features/mensualite.svg', text: 'Mon optimisation' },
      ],
    },
];

//**********  MAIN-DETAILS ********** //
const MainDetails = () => {
    return(
        <div className='w-full h-[1000px] text-blue-500'>
            a compléter plus tard
        </div>
    )
}