'use client'
import Header from "../_sections/header"
import Footer from "../_sections/footer"
import { useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import { signOut } from "next-auth/react"


// Composant principal qui gère l'affichage conditionnel en fonction de la session
const DashboardPage = () => {
    // Récupère les données de session via next-auth
    const { data: session } = useSession();

    return (
        <>
            {session?.user ? (
                // Si l'utilisateur est connecté (session et user existent)
                <>
                    <Header />         {/* Affiche l'en-tête */}
                    <Dashboard />      {/* Affiche le contenu du dashboard */}
                    <Footer />         {/* Affiche le pied de page */}
                </>
            ) : (
                // Si l'utilisateur n'est pas connecté, propose un bouton vers la page de login
                <div className="flex flex-col justify-center items-center w-full h-full bg-black gap-10">
                    <div className="flex w-full text-white justify-center">
                        Vous n'êtes pas connecté ! 
                    </div>
                    <div>
                        <Link href="/auth/login">
                            <button className="text-white">Connexion</button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

const Dashboard = () => {
    const { data: session } = useSession();

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-full gap-20 text-xl 2xl:text-3xl bg-black"> 
                <div className="text-white">
                    Bienvenue
                        {session?.user?.name && (
                        <span> {session.user.name} !</span>
                        )}
                </div>
                <div className="text-white">
                    Tu es bien connecté(e)
                </div>
                <div>
                    <button onClick={() => signOut()} className="text-white">
                        Déconnexion
                    </button>
                </div>

            </div>
        </>
    );
};

export default DashboardPage