import { NextRequest, NextResponse } from "next/server";
import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";

type Session = typeof auth.$Infer.Session;

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  const pathname = request.nextUrl.pathname;

  // Utilisateur non authentifié : bloque l'accès aux pages protégées
  const protectedRoutes = ["/protected", "/dashboard"];
  if (!session && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Utilisateur authentifié : bloque l'accès aux pages login/signup
  const publicOnlyRoutes = ["/login", "/sign-up"];
  if (session && publicOnlyRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected", "/dashboard", "/login", "/sign-up"], // Toutes les routes concernées
};
