import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ success: false, error: "Champs requis manquants." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json({ success: false, error: "Email incorrect." }, { status: 401 });
  }

  // ⚠️ Ici, à adapter si tu hashes les mots de passe !
  const isValidPassword = user.password === password;

  if (!isValidPassword) {
    return NextResponse.json({ success: false, error: "Mot de passe incorrect." }, { status: 401 });
  }

  return NextResponse.json({ success: true });
}