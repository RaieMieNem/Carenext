import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section className="flex flex-col min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
        <Button className="fixed top-5" variant={"outline"} asChild>
          <Link href={"/"}>
            <Icons.arrowLeft className="h-2 w-2" />
            Back
          </Link>
        </Button>
        {children}
      </section>

  );
}
