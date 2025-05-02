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
                Login Page
            </div>
            <button onClick={()=> signIn('google', {callbackUrl:"/dashboard"})} className="cursor-pointer [font-family:var(--inter)] text-xl 2xl:text-3xl mt-4 bg-[rgba(var(--primary-color))] text-[rgba(var(--secondary-color))] py-2 px-4 2xl:py-3 2xl:px-6 rounded-3xl hover:bg-[rgba(var(--third-color))] hover:text-[rgba(var(--primary-color))] transition-transform duration-300 hover:-translate-y-1">
                Se connecter avec Google
            </button>
            <button onClick={()=> signIn('github', {callbackUrl:"/dashboard"})}  className="cursor-pointer [font-family:var(--inter)] text-xl 2xl:text-3xl mt-4 bg-[rgba(var(--primary-color))] text-[rgba(var(--secondary-color))] py-2 px-4 2xl:py-3 2xl:px-6 rounded-3xl hover:bg-[rgba(var(--third-color))] hover:text-[rgba(var(--primary-color))] transition-transform duration-300 hover:-translate-y-1">
                Se connecter avec GitHub
            </button>
        </div>
    )
}

export default LoginPage