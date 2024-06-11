import {
  Eye,
  ThumbsUp,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
const numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const best = [
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
const BestTab = () => {
  const [num, setNum] = useState(0);
  const setColor = (num: number) => {
    switch (num) {
      case 1:
        return "text-[#edb900] text-xs font-['Pretendard']";
      case 2:
        return "text-[#919191] text-xs font-['Pretendard']";
      case 3:
        return "text-[#bb4300] text-xs font-['Pretendard']";
      default:
        return "text-gray-600 text-xs font-['Pretendard']";
    }
  };
  return (
    <>
      <div className="w-full gap-[12px] mt-[88px]">
        <div className="w-full h-[37px] border-b border-[#9CA3AF] text-zinc-900 text-xl mb-[20px] font-['Pretendard']">
          주간 인기 글 TOP 100
        </div>
        {best.map((arg, i) => (
          <div className="w-full h-[124px] rounded-[10px] shadow mb-[12px] flex flex-row px-[22px] py-[12px] justify-between">
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-gray-700 text-xl font-bold font-['Pretendard']">
                  {best[i][0]}
                </div>
                <div className="text-gray-600 text-xs mt-[9px] font-['Pretendard']">
                  {best[i][1]}
                </div>
              </div>
              <div className="gap-[18px] flex flex-row">
                <div className="text-gray-600 text-xs font-['Pretendard']s">{best[i][2]}</div>
                <div className={setColor(i + 1)}>인기 {i + 1}위</div>
                <div className="text-gray-600 text-xs font-['Pretendard']">{best[i][3]}분 전</div>
                <div className="flex flex-row gap-[8px] text-gray-600">
                  <Eye size={15} />
                  <div className="text-gray-600 text-xs font-['Pretendard']">{best[i][4]}</div>
                </div>
                <div className="flex flex-row gap-[8px] text-gray-600">
                  <ThumbsUp size={15} />
                  <div className="text-xs font-['Pretendard']">{best[i][5]}</div>
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
export default BestTab;
