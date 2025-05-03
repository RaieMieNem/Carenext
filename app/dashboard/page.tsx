'use client'

import { useSession, signOut } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "../_sections/header"
import Footer from "../_sections/footer"

// Composant principal de la page Dashboard
const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique si l'utilisateur n'est pas connecté
    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  // Pendant le chargement de la session
  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white text-xl">
        Chargement...
      </div>
    );
  }

  return (
    <>
      <Header />

      {session?.user && <Dashboard />}

      <Footer />
    </>
  );
};

// Composant affiché lorsque l'utilisateur est connecté
const Dashboard = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    // Redirige vers la page de connexion après déconnexion
    signOut({ callbackUrl: '/auth/login' });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-20 text-xl 2xl:text-3xl bg-black">
      <div className="flex justify-center text-white w-full">
        Bienvenue
        {session?.user?.name && (
          <span className="ml-2">{session.user.name} !</span>
        )}
      </div>

      <div className="flex w-full text-white text-center items-center justify-center">
        Tu es bien connecté(e) <br />
        (tqt on fera une page bien propre ici aussi)
      </div>

      <button onClick={handleSignOut} className="w-full text-white hover:underline">
        Déconnexion
      </button>
    </div>
  );
};

export default DashboardPage;
