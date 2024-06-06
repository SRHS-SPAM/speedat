import Footer from "@/components/nav/footer";
import Header from "@/components/nav/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="mt-[79px] h-screen"> {children}</main>
      <Footer />
    </>
  );
}
