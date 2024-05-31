import Header from "@/components/nav/header";
import Footer from "@/components/nav/footer";

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
