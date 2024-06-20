import {
  Eye,
  ThumbsUp,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
const list = [
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
];
const numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortList = ["최신 순", "좋아요 순", "댓글 순", "조회 순"];
const SystemTab = () => {
  const [num, setNum] = useState(0);
  const [sort, setSort] = useState(0);
  return (
    <>
      <img src="./systemTab.svg" />
      <div className="w-full gap-[12px] mt-[88px]">
        <div className="w-full h-[37px] border-b border-[#9CA3AF]  mb-[20px] flex flex-row justify-between">
          <div className="text-zinc-900 text-xl font-['Pretendard'] font-bold">시스템 게시판</div>
          <div className="flex flex-row gap-[12px]">
            {sortList.map((arg, i) => (
              <div
                key={i}
                className={
                  sort == i
                    ? "text-gray-900 text-base font-medium font-['Pretendard'] cursor-pointer"
                    : "text-gray-400 text-base font-medium font-['Pretendard'] cursor-pointer"
                }
                onClick={() => setSort(i)}>
                {arg}
              </div>
            ))}
          </div>
        </div>
        {list.map((arg, i) => (
          <div className="w-full h-[124px] rounded-[10px] shadow mb-[12px] flex flex-row px-[22px] py-[12px] justify-between">
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-gray-700 text-xl font-bold">{list[i][0]}</div>
                <div className="text-gray-600 text-xs mt-[9px]">{list[i][1]}</div>
              </div>
              <div className="gap-[18px] flex flex-row">
                <div className="text-gray-600 text-xs">{list[i][2]}</div>
                <div className="text-gray-600 text-xs font-['Pretendard']">{list[i][3]}분 전</div>
                <div className="flex flex-row gap-[8px]">
                  <Eye size={15} />
                  <div className="text-gray-600 text-xs font-['Pretendard']">{list[i][4]}</div>
                </div>
                <div className="flex flex-row gap-[8px]">
                  <ThumbsUp size={15} />
                  <div className="text-gray-600 text-xs font-['Pretendard']">{list[i][5]}</div>
                </div>
              </div>
            </div>
            <img src={"http://via.placeholder.com/100x100"} alt="" />
          </div>
        ))}
        <div className="flex flex-row items-center flex-1 justify-center mb-[96px]">
          <div className=" text-[#FFB700] cursor-pointer" onClick={() => setNum(0)}>
            <ChevronsLeft />
          </div>
          <div className=" text-[#FFB700] cursor-pointer" onClick={() => setNum(num - 1)}>
            <ChevronLeft />
          </div>
          <div className="mx-[25px] flex flex-row">
            {numlist.map((arg, i) => (
              <div
                className={
                  i == num
                    ? "w-[32px] h-[32px] text-[24px] cursor-pointer"
                    : "w-[32px] h-[32px] text-[24px] text-[#6b7280] cursor-pointer"
                }
                onClick={() => setNum(i)}>
                {i + 1}
              </div>
            ))}
          </div>
          <div className=" text-[#FFB700] cursor-pointer" onClick={() => setNum(num + 1)}>
            <ChevronRight />
          </div>
          <div className=" text-[#FFB700] cursor-pointer" onClick={() => setNum(9)}>
            <ChevronsRight />
          </div>
        </div>
      </div>
    </>
  );
};
export default SystemTab;
