import { Search, Eye, ThumbsUp } from "lucide-react";
import Image from "next/image";

//맨 위 이미지 넣어야 하고 글씨체 바꿔야함
const list = [
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "15", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
];
const best = [
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
];
const tab = ["인기 글", "설계과", "제어과", "시스템", "군특성화"];
const Main = () => {
  return (
    <div className="w-full flex flex-col min-w-[721px]">
      <div className="w-full flex flex-row justify-center">
        <div className="w-[85%] flex justify-end flex-col">
          <div className="w-full h-[41px] flex flex-row items-center">
            <div className="w-[16%] h-full bg-[#FEF9C3] border-b border-[#DF9E12] flex justify-center items-center">
              커뮤니티 홈
            </div>
            {tab.map((arg, i) => (
              <div className="w-[20%] h-full flex justify-center items-center border-b border-[#9CA3AF]">
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
          <div className="w-full gap-[12px] mt-[88px]">
            <div className="w-full h-[37px] border-b border-[#9CA3AF] text-zinc-900 text-xl mb-[20px]">
              최신 글
            </div>
            {list.map((arg, i) => (
              <div className="w-full h-[124px] border-b border-gray-400 mb-[12px] flex flex-row px-[22px] py-[12px] justify-between">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="text-gray-700 text-xl font-bold">{list[i][0]}</div>
                    <div className="text-gray-600 text-xs mt-[9px]">{list[i][1]}</div>
                  </div>
                  <div className="gap-[18px] flex flex-row">
                    <div className="text-gray-600 text-xs">{list[i][2]}</div>
                    {list[i][3] != "0" ? (
                      <div className="text-gray-600 text-xs">인기 {list[i][3]}위</div>
                    ) : (
                      <></>
                    )}
                    <div className="text-gray-600 text-xs">{list[i][4]}분 전</div>
                    <div className="flex flex-row gap-[8px]">
                      <Eye size={15} />
                      <div className="text-gray-600 text-xs">{list[i][5]}</div>
                    </div>
                    <div className="flex flex-row gap-[8px]">
                      <ThumbsUp size={15} />
                      <div className="text-gray-600 text-xs">{list[i][6]}</div>
                    </div>
                  </div>
                </div>
                <img src={"http://via.placeholder.com/100x100"} alt="" />
              </div>
            ))}
          </div>
          <div className="w-full gap-[12px] mt-[106px]">
            <div className="w-full h-[37px] border-b border-[#9CA3AF] text-zinc-900 text-xl mb-[20px]">
              인기 글
            </div>
            {list.map((arg, i) => (
              <div className="w-full h-[124px] border-b border-gray-400 mb-[12px] flex flex-row px-[22px] py-[12px] justify-between">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="text-gray-700 text-xl font-bold">{best[i][0]}</div>
                    <div className="text-gray-600 text-xs mt-[9px]">{best[i][1]}</div>
                  </div>
                  <div className="gap-[18px] flex flex-row">
                    <div className="text-gray-600 text-xs">{best[i][2]}</div>
                    <div className="text-gray-600 text-xs">인기 {i + 1}위</div>
                    <div className="text-gray-600 text-xs">{best[i][3]}분 전</div>
                    <div className="flex flex-row gap-[8px] text-gray-600">
                      <Eye size={15} />
                      <div className="text-gray-600 text-xs">{best[i][4]}</div>
                    </div>
                    <div className="flex flex-row gap-[8px] text-gray-600">
                      <ThumbsUp size={15} />
                      <div className="text-xs">{best[i][5]}</div>
                    </div>
                  </div>
                </div>
                <img src={"http://via.placeholder.com/100x100"} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
