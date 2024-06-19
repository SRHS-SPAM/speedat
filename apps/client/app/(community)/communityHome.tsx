import { Eye, ThumbsUp } from "lucide-react";
const list = [
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "15", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
];
const best = [
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "30", "56", "12"],
];
const CommunityHome = () => {
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
      <img src="./commuMainImage.svg" />
      <div className="w-full gap-[12px] mt-[88px]">
        <div className="w-full h-[37px] border-b border-[#9CA3AF] text-zinc-900 text-xl mb-[20px] font-['Pretendard'] font-bold">
          주간 인기 글 TOP 100
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
                {list[i][3] != "0" ? (
                  <div className="text-gray-600 text-xs font-['Pretendard']">
                    인기 {list[i][3]}위
                  </div>
                ) : (
                  <></>
                )}
                <div className="text-gray-600 text-xs font-['Pretendard']">{list[i][4]}분 전</div>
                <div className="flex flex-row gap-[8px]">
                  <Eye size={15} />
                  <div className="text-gray-600 text-xs font-['Pretendard']">{list[i][5]}</div>
                </div>
                <div className="flex flex-row gap-[8px]">
                  <ThumbsUp size={15} />
                  <div className="text-gray-600 text-xs font-['Pretendard']">{list[i][6]}</div>
                </div>
              </div>
            </div>
            <img src={"http://via.placeholder.com/100x100"} alt="" />
          </div>
        ))}
      </div>
      <div className="w-full gap-[12px] mt-[106px]">
        <div className="w-full h-[37px] border-b border-[#9CA3AF] text-zinc-900 text-xl mb-[20px] font-['Pretendard'] font-bold">
          인기 글
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
      </div>
    </>
  );
};
export default CommunityHome;
