import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-start">
        <Sidebar />
        <main className="mt-[79px] w-full"> {children}</main>
      </div>
      <Footer />
    </>
  );
}
