"use client";

import { Home, Globe, Coffee, Clock, Calendar, Github, Instagram, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavList = [<Globe key={1} />, <Coffee key={2} />, <Clock key={3} />, <Calendar key={4} />];
const barList = ["커뮤니티", "급식표", "시간표", "달력"];
const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="mt-[79px] w-[240px] h-[849px] bg-white dark:bg-zinc-900 flex flex-col justify-between">
      <div>
        <div className="w-full h-[48px] bg-yellow-100 flex items-center cursor-pointer">
          <div className="ml-[12px] gap-[8px] flex flex-row font-bold text-lg ">
            <Home />홈
          </div>
          <div></div>
        </div>
        <div className=" mb-[32px]">
          {NavList.map((arg, i) => (
            <div
              className="w-full h-[48px] ml-[12px] gap-[8px] flex items-center flex-row font-bold text-lg text-gray-600 dark:text-gray-300 cursor-pointer"
              key={i}>
              {arg}
              {barList[i]}
            </div>
          ))}
        </div>
        <div>
          <div className="w-[240px] pl-[12px] font-bold text-lg text-gray-600 dark:text-gray-300 border-b-[2px] border-gray-400 flex items-center">
            외부 링크
          </div>
          <div className="w-full h-[48px] ml-[12px] gap-[8px] flex items-center flex-row font-bold text-lg text-gray-600 dark:text-gray-300 cursor-pointer">
            <Instagram />
            인스타그램
          </div>
          <div className="w-full h-[48px] ml-[12px] gap-[8px] flex items-center flex-row font-bold text-lg text-gray-600 dark:text-gray-300 cursor-pointer">
            <Github />
            깃허브
          </div>
        </div>
      </div>
      <div className="w-full h-[48px] ml-[12px] gap-[8px] flex items-center flex-row font-bold text-lg text-gray-600 dark:text-gray-300 cursor-pointer">
        <Settings />앱 세팅
      </div>
    </div>
  );
};
export default Sidebar;
// bg-zinc-900
