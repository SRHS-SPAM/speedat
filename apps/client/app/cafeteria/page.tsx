
import Image from "next/image";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import CafeMenu from "./_components/cafeMenu";
export interface CafeMenuPaneProps {
  title: string
  data: string[]
}

export default function Home() {
  const currentDate = new Date();
  const year = currentDate.getFullYear()
  const month =  currentDate.getMonth()
  const date =  currentDate.getDate()
  return (
    <main className="mx-auto">
      <div className="flex flex-col w-[1000px] items-center">
      <span className="text-xl font-semibold w-full mb-1">
          오늘의 급식
        </span><span className="font-semibold text-gray-500 w-full mb-12">
          {year}년 {month+1}월 {date}일
        </span>
        <CafeMenu />
      </div>
    </main>
  );
}
