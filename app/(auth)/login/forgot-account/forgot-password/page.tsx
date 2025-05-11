"use client";

import { useState } from "react";
import { forgetPassword } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function ForgotPasswordPage() {
  const params = useSearchParams();
  const emailFromQuery = params.get("email") || "";
  const [email, setEmail] = useState(emailFromQuery);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await forgetPassword({
      email,
      redirectTo: `${window.location.origin}/login/forgot-account/forgot-password/reset-password`, 
    });

    if (error) {
      setMessage("Un problème est survenue, veuillez réessayer");
    } else {
      setMessage("Lien de réinitialisation envoyé !");
    }
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto space-y-4 container"
    >
      <h1 className="text-xl font-bold">Mot de passe oublié ?</h1>
      <Input
        type="email"
        required
        value={email}
        placeholder="Votre adresse email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2"
      />
      <div className="flex w-full gap-2">
        <Button className="flex w-full bg-[rgba(var(--secondary-color))] text-[rgba(var(--primary-color))] hover:bg-[rgba(var(--third-color))]" type="submit">Envoyer un lien</Button>
      </div>
      {message && <p>{message}</p>}
    </form>
  );
}
