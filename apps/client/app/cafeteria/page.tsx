"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import CafeMenu from "./_components/cafeMenu";
export interface CafeMenuPaneProps {
  title: string
  data: string[]
}
const Data:CafeMenuPaneProps[] = [
  {
    title: "조식",
    data: [
      "배추김치",
      "수수밥",
      "북어계란국",
      "오복치",
      "고구마맛탕"
    ]
  },
  {
    title: "중식",
    data: [
      "배추김치",
      "수수밥",
      "북어계란국",
      "오복치",
      "고구마맛탕"
    ]
  },
  {
    title: "석식",
    data: [
      "배추김치",
      "수수밥",
      "북어계란국",
      "오복치",
      "고구마맛탕"
    ]
  },
]

export default function Home() {
  const params = useSearchParams();
  const currentDate = new Date();
  const year = parseInt(params.get("year") || currentDate.getFullYear().toString() );
  const month = parseInt(params.get("month") || currentDate.getMonth().toString() );
  const date = parseInt(params.get("date") || currentDate.getDate().toString() );
  return (
    <main className="px-10">
      <div className="flex flex-col">
        <CafeMenu data={Data}/>
      </div>
    </main>
  );
}
