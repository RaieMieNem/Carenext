'use client'
import { signIn } from "next-auth/react"

const LoginPage = () => {
    return (
        <Login/>
    )
}

const Login = () => {
    return(
        <div className="flex flex-col justify-center items-center w-full h-full gap-20 text-xl 2xl:text-3xl bg-black"> 
            <div className="text-white">
                Login Page (tqt faudra faire une page bien propre)
            </div>
            <button
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="cursor-pointer flex items-center bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-3xl transition-transform duration-300 hover:-translate-y-1"
                >
                <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                />
                Se connecter avec Google
            </button>
        </div>
    )
}

export default LoginPage