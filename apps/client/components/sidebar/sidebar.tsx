"use client";

import {
  Home,
  Globe,
  Coffee,
  Clock,
  Calendar,
  Github,
  Instagram,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export interface SideBarInputProps {
  isDark?: boolean;
}
import { useSelectedLayoutSegment } from "next/navigation";
const NavList = [
  { icon: <Home />, route: "/mainPage", label: "홈" },
  { icon: <Globe />, route: "/community", label: "커뮤니티" },
  { icon: <Coffee />, route: "/cafeteria", label: "급식표" },
  { icon: <Clock />, route: "/timetable", label: "시간표" },
  { icon: <Calendar />, route: "/calendar", label: "달력" },
];
const selectTab = (preTab: any) => {
  if (preTab == "mainPage") return 0;
  else if (preTab == "(community)") return 1;
  else if (preTab == "cafeteria") return 2;
  else if (preTab == "timetable") return 3;
  else if (preTab == "(calendar)") return 4;
};
const Sidebar = ({ isDark = false }: SideBarInputProps) => {
  const segment = useSelectedLayoutSegment();
  console.log(segment);
  return (
    <div
      className={`fixed top-0 mt-[79px] w-[240px] h-[calc(100vh-79px)] ${isDark ? "bg-zinc-900" : "bg-white"} dark:bg-zinc-900 flex flex-col justify-between z-20 border-r border-gray-400`}>
      <div>
        <div className=" mb-[32px]">
          {NavList.map((arg, i) => (
            <Link href={arg.route} key={i}>
              <div
                className={`w-full h-[48px] pl-3 gap-[8px] flex items-center flex-row font-bold text-lg ${selectTab(segment) == i ? "bg-yellow-100" : ""} ${isDark ? "text-gray-300" : "text-gray-600"} dark:text-gray-300 cursor-pointer`}
                key={i}>
                {arg.icon}
                {arg.label}
              </div>
            </Link>
          ))}
        </div>
        <div>
          <div
            className={`dark:bg-zinc-900 ${isDark ? "bg-zinc-900" : "bg-white"} w-full pl-[12px] font-bold text-lg ${isDark ? "text-gray-300" : "text-gray-600"} dark:text-gray-300 border-b-[2px] border-gray-400 flex items-center`}>
            계정
          </div>
          <div
            className={`dark:bg-zinc-900 ${isDark ? "bg-zinc-900" : "bg-white"} w-full h-[48px] pl-[12px] gap-[8px] flex items-center flex-row font-bold text-lg ${isDark ? "text-gray-300" : "text-gray-600"} dark:text-gray-300 cursor-pointer`}>
            <User />
            마이페이지
          </div>
          <div
            className={`dark:bg-zinc-900 ${isDark ? "bg-zinc-900" : "bg-white"} w-full h-[48px] pl-[12px] gap-[8px] flex items-center flex-row font-bold text-lg ${isDark ? "text-gray-300" : "text-gray-600"} dark:text-gray-300 cursor-pointer`}>
            <Settings />
            설정
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
// bg-zinc-900
