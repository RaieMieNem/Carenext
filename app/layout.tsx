import type { Metadata } from "next";
import { Inter, Kaisei_Tokumin } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kaisei_tokumin = Kaisei_Tokumin({
  variable: "--font-kaisei",
  subsets: ["latin"], weight: ["400","500","700"] 
});

export const metadata: Metadata = {
  title: "CareInvest",
  description: "Etudiez votre projet locatif de A à Z",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${kaisei_tokumin.variable} antialiased`}
      >

        {children}

      </body>
    </html>
  );
}
