"use client";

import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus } from "lucide-react";
import EventItem from "./_components/eventItem";
import Calender from "./_components/calendar";
import { Data } from "./_data/datas";

const days = [
  ["일", "9"],
  ["월", "10"],
  ["화", "11"],
  ["수", "12"],
  ["목", "13"],
  ["금", "14"],
  ["토", "15"],
];

const times = [
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 AM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
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
    <div>
      <div className="w-[1440px] h-[1500px] relative bg-white">
        <div className="px-6 py-2.5 left-[240px] top-[95px] absolute justify-center items-center gap-2.5 inline-flex">
          <div className="text-zinc-900 text-[32px] font-semibold font-['Pretendard'] leading-[38.40px]">
            2024년 6월
          </div>
        </div>
        <div className="p-6 left-[240px] top-[153px] absolute flex-col justify-start items-end gap-3 inline-flex">
          <div className="justify-start items-start inline-flex">
            <div className="flex flex-row">
              {days.map((ai, i) => (
                <div
                  key={i}
                  className="w-[120px] h-[30px] justify-center items-center gap-2.5 flex">
                  <div className="text-gray-700 text-xs font-semibold font-['Pretendard'] leading-[14.40px] flex flex-row">
                    {ai.map((aj, j) => (
                      <div
                        key={j}
                        className="text-gray-700 text-xs font-semibold font-['Pretendard'] leading-[14.40px] pl-[10px]">
                        {aj}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="flex-col justify-start items-center gap-8 inline-flex">
              {times.map((ai, i) => (
                <div
                  key={i}
                  className="text-zinc-900 text-[8px] font-semibold font-['Pretendard'] leading-[9.60px] flex-col">
                  {ai}
                </div>
              ))}
            </div>
            <div className="justify-start items-end flex">
              <div className="flex-row justify-start items-start inline-flex">
                {days.map((arg, i) => (
                  <div key={i}>
                    {times.map((arg, j) => (
                      <div
                        key={j}
                        className="w-[120px] h-[42px] relative border border-gray-500"></div>
                    ))}
                    <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[276px] h-[666px] left-[1164px] top-[61px] p-4 absolute border border-gray-400">
          <div className="px-2 py-1 left-[61px] top-[600px] absolute"></div>
          <div className="px-2 py-1 left-[192px] top-[600px] absolute"></div>
          <div className="w-full h-full flex-col justify-start items-center inline-flex">
            <Calender ymd={ymd} setymd={setYmd} />
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                메모
              </div>
              <div className="py-2.5 flex-col justify-start items-start gap-2.5 flex">
                <div className="flex-col justify-start items-center gap-[17px] flex">
                  <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="h-[16.50px] flex-col justify-start items-start gap-0.5 flex">
                      <div className="px-1 justify-start items-start inline-flex">
                        <div className="text-gray-400 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                          제목
                        </div>
                      </div>
                      <div className="w-60 h-[0.50px] relative bg-gray-400"></div>
                    </div>
                    <div className="w-60 h-[120px] relative">
                      <div className="w-60 h-[120px] px-2 py-3 left-0 top-0 absolute rounded border border-gray-700 justify-start items-start gap-1 inline-flex">
                        <div className="grow shrink basis-0 text-gray-700 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                          메모 입력
                        </div>
                      </div>
                      <div className="w-6 h-6 left-[205px] top-[85px] absolute"></div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-8 inline-flex">
                    <div className="w-4 h-4 relative"></div>
                    <div className="justify-center items-center gap-6 flex">
                      <div className="text-zinc-900 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                        4:00 AM
                      </div>
                      <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="text-zinc-900 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                          ~
                        </div>
                      </div>
                      <div className="text-zinc-900 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                        5:00 AM
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-8 inline-flex">
                    <div className="w-4 h-4 relative bg-red-500 rounded-2xl"></div>
                    <div className="text-zinc-900 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                      메모 컬러 변경
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
