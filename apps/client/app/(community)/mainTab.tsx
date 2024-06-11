"use client";
import { Search, Eye, ThumbsUp } from "lucide-react";
import { useState } from "react";
import CommunityHome from "./communityHome";
import BestTab from "./communityBest";

const tab = ["커뮤니티 홈", "인기 글", "설계과", "제어과", "시스템", "군특성화"];
const MainTab = () => {
  const [select, setSelect] = useState(0);
  const selectContent = () => {
    switch (select) {
      case 0:
        return <CommunityHome />;
      case 1:
        return <BestTab />;
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
        <div className="w-full flex justify-end">
          <div className="px-[22px] w-[436px] h-[48px] rounded-[10px] border flex flex-row border-gray-400 items-center justify-between mt-[48px]">
            <input
              className="flex-grow px-2 py-1 outline-none"
              placeholder="태그 혹은 제목을 입력해주세요"
            />
            <Search size={28} className="cursor-pointer ml-2" />
          </div>
        </div>
        <img src="./commuMainImage.svg" />
        {selectContent()}
      </div>
    </div>
  );
};
export default MainTab;
