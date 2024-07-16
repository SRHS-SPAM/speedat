import Sidebar from "@/components/sidebar/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-row justify-start">{children}</div>
    </>
  );
}
