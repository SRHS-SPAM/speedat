import type { Metadata } from "next";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
        <Header />
        <div className="flex flex-row justify-start">
          <Sidebar />
          <main className="w-full ml-[240px] mt-[79px]">{children}</main>
        </div></>
  );
}