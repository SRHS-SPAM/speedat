// import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
