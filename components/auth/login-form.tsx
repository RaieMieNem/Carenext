'use client'
import { signIn } from "@/lib/actions";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useState } from "react";
import { Icons } from "../icons";
import SignInSocial from "./sign-in-social";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "sonner";
import Image from "next/image";

export default function LoginForm() {
  const initialState = { errorMessage: "" };
  const [state, formAction, pending] = useActionState(signIn, initialState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  useEffect(() => {
    if (state.errorMessage.length) {
      toast.error(state.errorMessage);
    }
  }, [state.errorMessage]);

  return (
    <div className="flex flex-col w-full h-fit justify-center items-center">
      <form
        action={formAction}
        className="bg-transparent m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] sm:border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="p-8">
          <div>
            <h1 className="text-center mb-1 mt-4 text-xl font-semibold pb-5">
              Connexion
            </h1>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2 relative w-full my-[30px] border-b-2 border-[#fff]">
              <span className="absolute right-[8px] top-[10px] leading-[57px] text-lg">
                <Image src="/mail-logo.svg" alt="mail-logo" width={20} height={20}/>
              </span>
              <Input 
                type="email" 
                required 
                name="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => {
                  if (!email) {
                    setEmailFocused(false);
                  }
                }}
                className="pr-[35px] pl-[5px] peer w-full h-[40px] bg-[transparent] border-none outline-none text-base text-[rgba(var(--secondary-color))] focus-visible:ring-transparent"
              />
              <Label 
                htmlFor="email" 
                className={`text-[rgba(var(--secondary-color))] duration-400 text-base absolute left-[5px] font-bold pointer-events-none pb-2 transition-all peer-focus:[color:rgba(var(--third-color))]
                  ${email || emailFocused ? "top-[-20px]" : "top-1/2 translate-y-[-50%]"}`}
              >
                Email
              </Label>
            </div>

            <div className="space-y-2 relative w-full my-[30px] border-b-2 border-[#fff] ">
              <span className="absolute right-[8px] top-[10px] leading-[57px] text-lg">
                <Image src="/password-logo.svg" alt="password-logo" width={20} height={20} />
              </span>
              <Input
                type="password"
                required
                name="pwd"
                id="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => {
                  if (!password) {
                    setPasswordFocused(false);
                  }
                }}
                className="pr-[35px] pl-[5px] peer w-full h-[40px] bg-[transparent] border-none outline-none text-base text-[rgba(var(--secondary-color))] focus-visible:ring-transparent"
              />
              <Label
                htmlFor="pwd"
                className={`text-[rgba(var(--secondary-color))] font-bold duration-400 text-base absolute left-[5px] pointer-events-none pb-2 transition-all peer-focus:[color:rgba(var(--third-color))]
                  ${password || passwordFocused ? "top-[-20px]" : "top-1/2 translate-y-[-50%]"}`}
              >
                Mot de passe
              </Label>

              <div className="absolute right-0 bottom-[-60px] pb-3">
                <Button asChild variant="link" size="sm">
                  <Link
                    href="/login/forgot-account"
                    className="link intent-info variant-ghost text-white text-sm hover:[color:rgba(var(--third-color))]"
                  >
                    Mot de passe oublié ?
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-7">
              {state.errorMessage && !pending && (
                <p aria-live="polite" className="text-sm text-red-500">
                  {state.errorMessage}
                </p>
              )}
              <Button className="w-full bg-[rgba(var(--secondary-color))] text-[rgba(var(--primary-color))] hover:bg-[rgba(var(--third-color))]" disabled={pending}>
                Se connecter
              </Button>
            </div>

          </div>
        </div>

        <div className="bg-[rgba(24,24,27)] rounded-(--radius) p-3">
          <p className="text-accent-background text-center text-sm">
            Première connexion ? 
            <Button asChild variant="link" className="px-2 text-white">
              <Link href="/sign-up" className="hover:[color:rgba(var(--third-color))]">Créer un compte</Link>
            </Button>
          </p>
        </div>
      </form>
      <div className="mt-6 pb-4 flex justify-center gap-3 w-full">
              <SignInSocial provider="google">
                <Icons.google />
                <span className="text-black w-[270px]">Se connecter avec Google</span>
              </SignInSocial>
      </div>  
    </div>
  );
}