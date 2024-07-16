"use client";
import { Search, Eye, ThumbsUp } from "lucide-react";
import { useState } from "react";
import CommunityHome from "./communityHome";
import BestTab from "./communityBest";
import SystemTab from "./systemTab";
import DesignTab from "./designTab";
import ControlTab from "./controlTab";
import MilitaryTab from "./militaryTab";
import Link from "next/link";

const tab = ["커뮤니티 홈", "인기 글", "설계과", "제어과", "시스템", "군특성화"];
const MainTab = () => {
  const [select, setSelect] = useState(0);
  const selectContent = () => {
    switch (select) {
      case 0:
        return <CommunityHome />;
      case 1:
        return <BestTab />;
      case 2:
        return <DesignTab />;
      case 3:
        return <ControlTab />;
      case 4:
        return <SystemTab />;
      case 5:
        return <MilitaryTab />;
      default:
        return null;
    }
  };
  return (
    <div className="w-full flex flex-row justify-center mt-[48px] mb-[89px]">
      <div className="w-[85%] flex justify-end flex-col">
        <div className="w-full h-[41px] flex flex-row items-center">
          {tab.map((arg, i) => (
            <div
              key={i}
              className={
                i != select
                  ? "w-[20%] h-full flex justify-center text-[14px] items-center border-b border-[#9CA3AF] font-['Pretendard'] cursor-pointer"
                  : "bg-[#FEF9C3] w-[20%] h-full flex justify-center text-[14px] items-center border-b border-[#DF9E12] font-['Pretendard'] cursor-pointer"
              }
              onClick={() => setSelect(i)}>
              {tab[i]}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between mt-[48px]">
          <div className="h-[48px] flex flex-row items-center ">
          <Link href="/community/writing">
            <img src="/communityWriteButton.svg" className="cursor-pointer w-[48px] h-[48px]"></img>
            </Link>
            <div className="ml-[24px] text-zinc-900 text-2xl font-['Pretendard'] font-bold">
              당신만의 글을 작성해보세요!
            </div>
          </div>
          <div className="px-[22px] w-[436px] h-[48px] rounded-[10px] border flex flex-row border-gray-400 items-center justify-between">
            <input
              className="flex-grow px-2 py-1 outline-none"
              placeholder="태그 혹은 제목을 입력해주세요"
            />
            <Search size={28} className="cursor-pointer ml-2" />
          </div>
        </div>
        {selectContent()}
      </div>
    </div>
  );
};
export default MainTab;
