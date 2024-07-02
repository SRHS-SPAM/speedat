interface PostInputProps {
  list: Array<string>;
}
//list 순서:["이름", "미리보기", "()과 게시판", "인기순위 (없으면 0)", "(몇분 전인지)", "조회수", "좋아요 수"] #전부 str형으로
import { Eye, ThumbsUp } from "lucide-react";
const Post = ({ list }: PostInputProps) => {
  const setColor = (num: number) => {
    switch (num) {
      case 1:
        return "text-yellow-500 text-xs font-['Pretendard']";
      case 2:
        return "text-gray-400 text-xs font-['Pretendard']";
      case 3:
        return "text-yellow-900 text-xs font-['Pretendard']";
      default:
        return "text-gray-500 text-xs font-['Pretendard']";
    }
  };
  return (
    <div className="w-full h-[124px] rounded-[10px] shadow mb-[12px] flex flex-row px-[22px] py-[12px] justify-between cursor-pointer">
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-gray-700 text-xl font-bold font-['Pretendard']">{list[0]}</div>
          <div className="text-gray-500 text-xs mt-[9px] font-['Pretendard']">{list[1]}</div>
        </div>
        <div className="gap-[18px] flex flex-row">
          <div className="text-gray-500 text-xs font-['Pretendard']s">{list[2]}</div>
          {list[3] != "0" ? (
            <div className={setColor(parseInt(list[3]))}>인기 {list[3]}위</div>
          ) : (
            <></>
          )}
          <div className="text-gray-500 text-xs font-['Pretendard']">{list[4]}분 전</div>
          <div className="flex flex-row gap-[8px] text-gray-500">
            <Eye size={15} />
            <div className="text-gray-500 text-xs font-['Pretendard']">{list[5]}</div>
          </div>
          <div className="flex flex-row gap-[8px] text-gray-500">
            <ThumbsUp size={15} />
            <div className="text-xs font-['Pretendard']">{list[6]}</div>
          </div>
        </div>
      </div>
      <img src={"http://via.placeholder.com/100x100"} alt="" />
    </div>
  );
};
export default Post;
