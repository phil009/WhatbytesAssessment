import { Inter } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatBytes",
  description: "Skill Assessment Platform",
  icons: "/logo.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-foreground ${inter.className}`}>
        <header className="flex h-20 fixed z-50 items-center justify-between w-full border-b bg-background px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="WhatBytes" width={32} height={32} />
            <h1 className="sm:text-xl font-bold">WhatBytes</h1>
          </div>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/58048455?v=4"
                alt="Phil"
              />
              <AvatarFallback>PO</AvatarFallback>
            </Avatar>
            <span className="font-medium">Philip Ogboh</span>
          </div>
        </header>
        <SidebarProvider>
          <div className="flex w-full min-h-screen">
            <AppSidebar />
            <SidebarInset>
              <main className="flex-1 p-6 before:h-20 before:block">
                {children}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
