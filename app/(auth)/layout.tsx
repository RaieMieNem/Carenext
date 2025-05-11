import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col justify-center min-h-screen bg-black px-4 py-16 md:py-32 dark:bg-transparent text-white">
      <Button className="fixed top-5" asChild>
        <Link href={"/"}>
          <Icons.arrowLeft className="h-2 w-2" />
          Retour
        </Link>
      </Button>
      {children}
    </section>
  );
}
