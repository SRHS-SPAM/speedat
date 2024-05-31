import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Header /> */}
      <main className="mt-[79px] h-screen"> {children}</main>
      <Footer />
    </>
  );
}
