"use client";
import { ThemeChanger } from "@/components/theme-changer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/caiocesardesouza2003/",
    },
    {
      title: "GitHub",
      url: "https://github.com/CaioSouzaC1",
    },
    {
      title: "WhatsApp",
      url: "https://api.whatsapp.com/send?1=pt_BR&phone=19988506448",
    },
    {
      title: "Portfólio",
      url: "https://caiosouza.dev",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/caiocsouza17?igsh=MTVybDd4dTBkNG10eQ==",
    },
  ];

  return (
    <main className="relative h-screen w-screen flex justify-center items-center">
      <div className="flex-col flex gap-2 items-center">
        <h1 className="font-bold text-3xl">Caio Souza</h1>
        <h2 className="font-light text-sm">FullStack Developer 🚀</h2>
        <div className="mt-4 flex flex-col gap-4 w-full">
          {links.map((e: { title: string; url: string }) => (
            <Link key={e.title} href={e.url}>
              <Button className="w-full" variant={"outline"}>
                {e.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <ThemeChanger />
    </main>
  );
}
