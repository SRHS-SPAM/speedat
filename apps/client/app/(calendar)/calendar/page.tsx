"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import EventItem from "../../_components/eventItem";
import { lunarConv } from "@/lib/utils";
import Calender from "../../_components/calendar";

interface EventItemProps {
  title: string;
  dateStart: string;
  dateEnd: string;
  content: React.JSX.Element;
}

const Data: EventItemProps[] = [
  {
    title: "입학식",
    dateStart: "3월 21일(수)",
    dateEnd: "3월 21일(수)",
    content: (
      <>
        입학식
        <br />
        <br />
        8시 20분까지 등교.
        <br />
        최소 7시 기상
        <br />
        <br />
        단축수업 30분 있음.
      </>
    ),
  },

  {
    title: "졸업식",
    dateStart: "12월 13일(금)",
    dateEnd: "12월 13일(금)",
    content: (
      <>
        졸업식
        <br />
        <br />
        11시 20분까지 등교.
        <br />
        최고 9시 기상
        <br />
        <br />
        수고하셨습니다.
      </>
    ),
  },
];

export default function Home() {
  const [ymd, setYmd] = useState([2024, 1, 1]);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const initDate = new Date();
    setYmd([initDate.getFullYear(), initDate.getMonth(), initDate.getDate()]);
    setIsMounted(true);
  }, []);
  if (!isMounted) return <></>;
  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="flex flex-col items-center h-full">
        <div className="max-w-[1800px] w-full h-full">
          <div className="flex items-center p-28 h-full gap-12">
            <div className="w-1/2 h-full drop-shadow-2xl bg-white rounded-2xl">
              <Calender ymd={ymd} setymd={setYmd} />
            </div>
            <div className="w-1/2 h-full drop-shadow-2xl bg-white rounded-2xl flex flex-col p-6 justify-stretch">
              <span className="h-10 text-base font-medium">
                {lunarConv(ymd[0], ymd[1] + 1, ymd[2])}
              </span>
              <ScrollArea className="flex-1 p-4">
                <div className="flex flex-col gap-8 mb-12">
                  {Data.map((ai, i) => (
                    <EventItem
                      key={i}
                      content={ai.content}
                      title={ai.title}
                      dateEnd={ai.dateEnd}
                      dateStart={ai.dateStart}
                    />
                  ))}
                </div>
              </ScrollArea>
              <div className="h-11 mt-12 flex justify-between items-end">
                <input
                  className="flex-1 h-full rounded-full bg-slate-300 px-8 placeholder:text-white text-white font-semibold text-base"
                  placeholder={`${ymd[0]}년 ${ymd[1] + 1}월 ${ymd[2]}일에 일정 추가`}
                />
                <Plus className="h-full w-[44px] ml-4 text-white bg-yellow-300 rounded-full cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
