import Footer from "@/components/nav/footer";
import Header from "@/components/nav/header";
import Sidebar from "@/components/nav/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <main className="mt-[79px] h-screen"> {children}</main>
      </div>
      <Footer />
    </>
  );
}
