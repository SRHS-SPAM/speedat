import Sidebar from "@/components/nav/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-row justify-start">
        <Sidebar />
        <main className="mt-[79px] w-full"> {children}</main>
      </div>
    </>
  );
}
