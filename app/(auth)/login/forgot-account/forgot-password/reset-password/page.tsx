"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { resetPassword } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setMessage("Invalid or missing token.");
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) return;

    const { error } = await resetPassword({
      token,
      newPassword: password,
    });

    if (error) {
      setMessage("Echec de la réinitialisation du mot de passe");
    } else {
      setMessage("Mot de passe modifié avec succès ! Vous pouvez maintenant vous connecter.");
      setTimeout(() => router.push("/login"), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto space-y-4 container"
    >
      <h1 className="text-lg font-bold">Réinitialisation de mot de passe</h1>
      {message && <p>{message}</p>}
      <Input
        type="password"
        placeholder="Nouveau mot de passe"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2"
      />
      <div className="grid grid-cols-1 gap-2">
        <Button className="bg-[rgba(var(--secondary-color))] text-[rgba(var(--primary-color))] hover:bg-[rgba(var(--third-color))]" type="submit">Réinitialiser</Button>
      </div>
    </form>
  );
}
