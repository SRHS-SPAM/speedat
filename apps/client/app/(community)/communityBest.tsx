import Post from "@/components/community/post";
import { ChevronsLeft, ChevronLeft, ChevronsRight, ChevronRight } from "lucide-react";
import { useState } from "react";
const numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const best = [
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "1", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "2", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "3", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "4", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "5", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "6", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "7", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "8", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "9", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "10", "30", "56", "12"],
];
const BestTab = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <div className="w-full gap-[12px] mt-[88px]">
        <div className="w-full h-[37px] border-b border-[#9CA3AF] text-zinc-900 text-xl mb-[20px] font-['Pretendard']">
          주간 인기 글 TOP 100
        </div>
        {best.map((arg, i) => (
          <Post list={arg} key={i}></Post>
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
                onClick={() => setNum(i)}
                key={i}>
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
