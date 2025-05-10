'use client'
import Image from "next/image"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center w-full h-[100vh] bg-black">
            <div className="flex flex-col justify-center items-center min-h-[100vh gap-10">
                <LoginForm />
                <AuthProviders />
            </div>
        </div>
    )
}

const LoginForm = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)  // État pour gérer l'erreur

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Reset erreur avant la soumission
        setError(null)

        // Tentative de connexion
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
            callbackUrl: "/dashboard" // très important
        });
        

        // Vérification des erreurs
        if (res?.error) {
            console.log('Erreur:', res.error)  // Log l'erreur pour debugging

            if (res.error.includes("CredentialsSignin")) {
                setError("Email ou mot de passe incorrect.")
            } else {
                setError("Erreur lors de la connexion.")
            }
        } else {
            // Rediriger vers le dashboard en cas de succès
            router.push("/dashboard")
        }
    }

    return (
        <div className="pt-10 relative w-[400px] h-[500px] bg-[transparent] backdrop-blur-sm border-2 border-[rgba(var(--secondary-color),0.5)] rounded-[20px] flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl text-center text-[rgba(var(--secondary-color))] font-black [font-family:var(--Kaisei)]">Connexion</h2>

                <div className="relative w-[330px] my-[30px] border-b-2 border-[#fff]">
                    <span className="absolute right-[8px] top-[12px] leading-[57px] text-lg">
                        <Image src="/mail-logo.svg" alt="mail-logo" width={20} height={20}/>
                    </span>
                    <input 
                        type="email" 
                        htmlFor="email" 
                        className="pr-[35px] pl-[5px] peer w-full h-[50px] bg-[transparent] border-none outline-none text-base text-[rgba(var(--secondary-color))]" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="[font-family:var(--Kaisei)] text-[rgba(var(--secondary-color))] duration-400 text-base absolute top-1/2 left-[5px] translate-y-[-50%] pointer-events-none peer-focus:top-[-5px] peer-valid:top-[-5px] transition-all" htmlFor="email">
                        Email
                    </label>
                </div>

                <div className="relative w-[330px] my-[30px] border-b-2 border-[#fff]">
                    <span className="absolute right-[8px] top-[12px] leading-[57px] text-lg">
                        <Image src="/password-logo.svg" alt="password-logo" width={20} height={20}/>
                    </span>
                    <input 
                        type="password" 
                        htmlFor="password" 
                        className="pr-[35px] pl-[5px] peer w-full h-[50px] bg-[transparent] border-none outline-none text-base text-[rgba(var(--secondary-color))]" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="[font-family:var(--Kaisei)] transition-all duration-400 peer-focus:top-[-5px] peer-valid:top-[-5px] text-[rgba(var(--secondary-color))] text-base absolute top-1/2 left-[5px] translate-y-[-50%] pointer-events-none" htmlFor="password">
                        Password
                    </label>
                </div>

                {/* Affichage de l'erreur */}
                {error && (
                    <p className="pb-7 text-red-500 text-sm text-center">{error}</p>
                )}

                <div className="mt-[-15px] mb-[15px] text-[0.9rem] text-[rgba(var(--secondary-color))] flex flex-col justify-between gap-3">
                    <div className="flex">
                        <label htmlFor=""><input type="checkbox" className="mr-[3px]"/> Se rappeler de moi</label>
                    </div>
                    <div className="flex flex-row-reverse">
                        <a href="#" className="text-right hover:underline">mot de passe oublié ?</a>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pt-5">
                    <button type="submit" className="text-base text-[rgba(var(--primary-color))] font-bold cursor-pointer w-full h-[40px] bg-[rgba(var(--secondary-color))] border-none outline-none rounded-4xl">
                        Se connecter
                    </button>
                    <div className="text-[rgba(var(--secondary-color))] text-[0.9rem] text-center mt-[25px] mb-[10px]">
                        <p>Première connexion ? <a href="/auth/register" className="hover:underline font-bold">S'inscrire</a></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

const AuthProviders = () => {
    return (
        <div className="flex justify-between">
            <button
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="cursor-pointer flex items-center bg-white text-black border border-gray-300 w-[330px] px-4 py-2 rounded-3xl transition-transform duration-300 hover:-translate-y-1"
            >
                <div className="flex justify-start">
                    <Image
                        src="/google-logo.png"
                        alt="Google-logo"
                        width={20}
                        height={20}
                        className="w-5 h-5 mr-2"
                    />
                </div>
                <div className="flex px-6 font-medium text-center w-full">
                    Se connecter avec Google
                </div>
            </button>
        </div>
    )
}

export default LoginPage
