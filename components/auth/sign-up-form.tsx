'use client';
import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { signUp } from "@/lib/actions";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import SignInSocial from "./sign-in-social";
import Image from "next/image";

export default function SignupForm() {
  const initialState = { errorMessage: "" };
  const [state, formAction, pending] = useActionState(signUp, initialState);
  
  // State for the floating labels
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [firstnameFocused, setFirstnameFocused] = useState(false);
  const [lastnameFocused, setLastnameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  useEffect(() => {
    if (state.errorMessage.length) {
      toast.error(state.errorMessage);
    }
  }, [state.errorMessage]);

  return (
    <div className="flex flex-col w-full h-fit justify-center items-center">
      <form
        action={formAction}
        className="bg-transparen m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] sm:border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="p-8">
          <div>
            <h1 className="text-center mb-1 mt-4 text-xl font-semibold pb-3">
              Inscription
            </h1>
          </div>
          
          <div className="space-y-6">
            {/* First name input */}
            <div className="space-y-2 relative w-full my-[30px] border-b-2 border-[#fff]">
              <span className="absolute right-[8px] top-[10px] leading-[57px] text-lg">
                <Image src="/user-logo.svg" alt="user-logo" width={20} height={20} />
              </span>
              <Input 
                type="text" 
                required 
                name="firstname" 
                id="firstname" 
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                onFocus={() => setFirstnameFocused(true)}
                onBlur={() => {
                  if (!firstname) {
                    setFirstnameFocused(false);
                  }
                }}
                className="pr-[35px] pl-[5px] peer w-full h-[40px] bg-[transparent] border-none outline-none text-base text-[rgba(var(--secondary-color))] focus-visible:ring-transparent"
              />
              <Label 
                htmlFor="firstname" 
                className={`text-[rgba(var(--secondary-color))] duration-400 text-base absolute left-[5px] font-bold pointer-events-none pb-2 transition-all peer-focus:[color:rgba(var(--third-color))]
                  ${firstname || firstnameFocused ? "top-[-20px]" : "top-1/2 translate-y-[-50%]"}`}
              >
                Prénom
              </Label>
            </div>

            {/* Last name input */}
            <div className="space-y-2 relative w-full my-[30px] border-b-2 border-[#fff]">
              <span className="absolute right-[8px] top-[10px] leading-[57px] text-lg">
                <Image src="/user-logo.svg" alt="user-logo" width={20} height={20} />
              </span>
              <Input 
                type="text" 
                required 
                name="lastname" 
                id="lastname" 
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                onFocus={() => setLastnameFocused(true)}
                onBlur={() => {
                  if (!lastname) {
                    setLastnameFocused(false);
                  }
                }}
                className="pr-[35px] pl-[5px] peer w-full h-[40px] bg-[transparent] border-none outline-none text-base text-[rgba(var(--secondary-color))] focus-visible:ring-transparent"
              />
              <Label 
                htmlFor="lastname" 
                className={`text-[rgba(var(--secondary-color))] duration-400 text-base absolute left-[5px] font-bold pointer-events-none pb-2 transition-all peer-focus:[color:rgba(var(--third-color))]
                  ${lastname || lastnameFocused ? "top-[-20px]" : "top-1/2 translate-y-[-50%]"}`}
              >
                Nom
              </Label>
            </div>

            {/* Email input */}
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

            {/* Password input */}
            <div className="space-y-2 relative w-full my-[30px] border-b-2 border-[#fff]">
              <span className="absolute right-[8px] top-[10px] leading-[57px] text-lg">
                <Image src="/password-logo.svg" alt="password-logo" width={20} height={20} />
              </span>
              <Input
                type="password"
                required
                name="pwd"
                id="pwd"
                className="pr-[35px] pl-[5px] peer w-full h-[40px] bg-[transparent] border-none outline-none text-base text-[rgba(var(--secondary-color))] focus-visible:ring-transparent"
              />
              <Label
                htmlFor="pwd"
                className="text-[rgba(var(--secondary-color))] font-bold duration-400 text-base absolute top-1/2 left-[5px] translate-y-[-50%] pointer-events-none peer-focus:top-[-8px] peer-valid:top-[-8px] pb-2 transition-all peer-focus:[color:rgba(var(--third-color))]"
              >
                Mot de passe
              </Label>
            </div>

            <div className="flex flex-col gap-3">
              {state.errorMessage && !pending && (
                <p aria-live="polite" className="text-sm text-red-500">
                  {state.errorMessage}
                </p>
              )}
              <Button className="w-full bg-[rgba(var(--secondary-color))] text-[rgba(var(--primary-color))] hover:bg-[rgba(var(--third-color))]" disabled={pending}>
                S'inscrire
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[rgba(24,24,27)] rounded-(--radius) p-3">
          <p className="text-accent-background text-center text-sm">
            Vous avez un compte ?
            <Button asChild variant="link" className="px-2 text-white">
              <Link href="/login" className="hover:[color:rgba(var(--third-color))]">Connectez-vous !</Link>
            </Button>
          </p>
        </div>
      </form>
      <div className="mt-6 pb-15 flex justify-center gap-3 w-full">
        <SignInSocial provider="google">
          <Icons.google />
          <span className="text-black w-[270px]">Se connecter avec Google</span>
        </SignInSocial>
      </div>  
    </div>
  );
}