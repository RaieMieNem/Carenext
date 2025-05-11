"use server";

import { redirect } from "next/navigation";
import { auth } from "./auth";
import { prisma } from "./prisma";
import { APIError } from "better-auth/api";

interface State {
  errorMessage?: string | null;
}

export async function signIn(prevState: State, formData: FormData) {
  const rawFormData = {
    email: formData.get("email") as string,
    password: formData.get("pwd") as string,
  };

  const { email, password } = rawFormData;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    console.log("Signed in");
  } catch (error) {
    if (error instanceof APIError) {
      switch (error.status) {
        case "UNAUTHORIZED":
          return { errorMessage: "Email ou de mot de passe incorrect" };
        case "BAD_REQUEST":
          return { errorMessage: "Email invalide" };
        default:
          return { errorMessage: "Une erreur est survenue" };
      }
    }
    console.error("La connexion avec email a échoué", error);
    throw error;
  }
  redirect("/dashboard");
}

export async function signUp(prevState: State, formData: FormData) {
  const rawFormData = {
    email: formData.get("email") as string,
    password: formData.get("pwd") as string,
    firstName: formData.get("firstname"),
    lastName: formData.get("lastname"),
  };

  const { email, password, firstName, lastName } = rawFormData;

  try {
    await auth.api.signUpEmail({
      body: {
        name: `${firstName} ${lastName}`,
        email,
        password,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      switch (error.status) {
        case "UNPROCESSABLE_ENTITY":
          return { errorMessage: "Cet utilisateur existe déjà" };
        case "BAD_REQUEST":
          return { errorMessage: "Email invalide" };
        default:
          return { errorMessage: "Une erreur est survenue" };
      }
    }
    console.error("L'inscription par mail/password a échoué", error);
  }
  redirect("/dashboard");
}

export async function searchAccount(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return !!user;
}
