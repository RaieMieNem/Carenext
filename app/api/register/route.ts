import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const { email, password } = await req.json();
  
    if (!email || !password) {
      return NextResponse.json({ message: "Champs requis" }, { status: 400 });
    }
  
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
  
    if (existingUser) {
      return NextResponse.json({ message: "Cet email est déjà utilisé" }, { status: 400 });
    }
  
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  
    return NextResponse.json({ message: "Utilisateur créé", user: newUser });
}
  