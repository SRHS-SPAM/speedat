import Post from "@/components/community/post";
const list = [
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "15", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
];
const best = [
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "1", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "2", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "3", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "4", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "5", "30", "56", "12"],
];
const CommunityHome = () => {
  return (
    <>
      <img src="./commuMainImage.svg" />
      <div className="w-full gap-[12px] mt-[88px]">
        <div className="w-full h-[37px] border-b border-[#9CA3AF] text-zinc-900 text-xl mb-[20px] font-['Pretendard'] font-bold">
          주간 인기 글 TOP 100
        </div>
        {list.map((arg, i) => (
          <Post list={arg} key={i}></Post>
        ))}
      </div>
      <div className="w-full gap-[12px] mt-[106px]">
        <div className="w-full h-[37px] border-b border-[#9CA3AF] text-zinc-900 text-xl mb-[20px] font-['Pretendard'] font-bold">
          인기 글
        </div>
        {best.map((arg, i) => (
          <Post list={arg} key={i}></Post>
        ))}
      </div>
    </>
  );
};
export default CommunityHome;
