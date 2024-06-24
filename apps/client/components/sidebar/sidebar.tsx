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
const NavList = [<Globe key={1} />, <Coffee key={2} />, <Clock key={3} />, <Calendar key={4} />];
const barList = ["커뮤니티", "급식표", "시간표", "달력"];
const Sidebar = ({ isDark = false }: SideBarInputProps) => {
  return (
    <div
      className={`fixed top-0 mt-[79px] w-[240px] h-[calc(100vh-79px)] ${isDark ? "bg-zinc-900" : "bg-white"} dark:bg-zinc-900 flex flex-col justify-between z-20 border-r border-gray-400`}>
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
              className={`w-full h-[48px] ml-[12px] gap-[8px] flex items-center flex-row font-bold text-lg ${isDark ? "text-gray-300" : "text-gray-600"} dark:text-gray-300 cursor-pointer`}
              key={i}>
              {arg}
              {barList[i]}
            </div>
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
