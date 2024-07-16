"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.replace("mainPage");
  return (
    <>
      <div className="h-[99vh]"></div>
      {/* <Navbar /> */}
    </>
  );
}
//임시 높이 100vh
