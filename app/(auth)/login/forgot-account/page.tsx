"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchAccount } from "@/lib/actions";

export default function ForgotAccountPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = await searchAccount(email);
    if (found) {
      router.push(
        `/login/forgot-account/forgot-password?email=${encodeURIComponent(
          email
        )}`
      );
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="p-6 max-w-md mx-auto space-y-4 container"
    >
      <h1 className="text-xl font-semibold">Retrouvez votre compte</h1>
      <Input
        type="email"
        placeholder="Entrez votre adresse mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <Button className="w-full bg-[rgba(var(--secondary-color))] text-[rgba(var(--primary-color))] hover:bg-[rgba(var(--third-color))]" type="submit">Chercher</Button>
    </form>
  );
}
