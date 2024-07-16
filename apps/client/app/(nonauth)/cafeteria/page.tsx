import Image from "next/image";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import CafeMenu from "./_components/cafeMenu";
import CafeMenuAll from "./_components/cafeMenuAll";
export interface CafeMenuPaneProps {
  title: string;
  data: string[];
}

export default function Home() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  return (
    <main className="flex flex-col w-full items-center mt-20">
      <div className="flex flex-col w-full max-w-[1000px]">
        <span className="text-3xl font-semibold w-full mb-1">오늘의 급식</span>
        <span className="font-semibold text-2xl text-gray-500 w-full mb-12">
          {year}년 {month + 1}월 {date}일
        </span>

        <div className="w-full overflow-x-scroll">
          <CafeMenu />
        </div>
      </div>
      <CafeMenuAll />
    </main>
  );
}
