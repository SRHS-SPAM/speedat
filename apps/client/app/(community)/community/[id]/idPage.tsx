import Post from "@/components/community/post";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Eye, ThumbsUp } from "lucide-react";
const inId = {
  title: "사회적 기업의 가치와 영향력",
  name: "커피중독자",
  tab: "시스템과 게시판",
  best: "1",
  time: "10",
  main: [
    "뭔 동물인지는 모르겠지만 멍청하게 생김",
    "/kapibara.svg",
    "쥐목 천축서과 카피바라아과 카피바라속에 속하는 포유류.캐피바라라고 부르기도 한다.",
    "콜롬비아, 베네수일라, 브라질, 파라과이, 우루과이, 아르헨티나 등의  남미 국가 여러 곳에 서식하며 이름은 고(古) 투피어로  '가느다란 잎을 먹는 동물'이라는 뜻인 카피이와라(kapi'iûara)에서 왔다.",
    "한편 한자이름은 과명과 동일한 천축서(天竺鼠)로,  '천축'은 인도, '서'는 쥐를 의미하는 한자다.",
    "즉, '인도쥐'란 뜻인데, 정작 카피바라를 비롯한  천축서과 동물들 대부분은 남미원산이다.",
  ],
};
const list = [
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "15", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
  ["Title 어쩌구 저쩌구", "Discription 어쩌구 저쩌구", "시스템과 게시판", "0", "30", "56", "12"],
];
// 메인 내용 디자인하고 받는 구조 물어보기
const IdPage = () => {
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
    <div className="w-full flex flex-col pt-12 px-8 pb-8">
      <div className="w-full mt-6 border-b border-gray-200 flex flex-row">
        <div className="w-full flex flex-row mb-3">
          <div className="h-[38px] flex flex-col justify-center">
            <ChevronLeft size={30} />
          </div>
          <div>
            <div className="text-zinc-900 text-[32px] font-semibold font-['Pretendard'] h-[38px] flex items-center">
              {inId.title}
            </div>
            <div className="flex flex-row gap-2 mt-3">
              <Image src={"/imsiProfile.svg"} alt="profile" width={32} height={32} />
              <div className="flex flex-col">
                <div className="text-zinc-900 text-xl font-normal">{inId.name}</div>
                <div>
                  <div className="gap-[18px] flex flex-row">
                    <div className="text-gray-600 text-xs">{inId.tab}</div>
                    {inId.best != "0" ? (
                      <div className={setColor(parseInt(inId.best))}>인기 {inId.best}위</div>
                    ) : (
                      <></>
                    )}
                    <div className="text-gray-600 text-xs font-['Pretendard']">
                      {inId.time}분 전
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex flex-row justify-center mt-[96px]">
        <div className="w-[80%]">
          <div className="text-zinc-900 text-xl font-normal font-['Pretendard'] ">
            {inId.main.map((arg, i) => (
              <>
                {arg[0] == "/" ? (
                  <Image
                    src={arg}
                    width={0}
                    height={0}
                    layout="responsive"
                    alt="mainimage"
                    className="my-16"></Image>
                ) : (
                  <div className="my-6">{arg}</div>
                )}
              </>
            ))}
          </div>
          <div className="mb-12">
            <div className="text-zinc-900 text-2xl font-normal font-['Pretendard'] w-full h-[53px] border-b border-gray-200">
              댓글
            </div>
          </div>
          <div className="mb-12">
            <div className="text-zinc-900 text-2xl font-normal font-['Pretendard'] w-full h-[53px] border-b border-gray-200">
              최신 글
            </div>
            {list.map((arg, i) => (
              <>
                {i != 2 ? (
                  <Post list={arg}></Post>
                ) : (
                  <div className="w-full h-[124px] rounded-[10px] shadow mb-[12px] flex flex-row px-[22px] py-[12px] justify-between bg-gray-100">
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="text-gray-500 text-xl font-bold font-['Pretendard']">
                          {arg[0]}
                        </div>
                        <div className="text-gray-400 text-xs mt-[9px] font-['Pretendard']">
                          {arg[1]}
                        </div>
                      </div>
                      <div className="gap-[18px] flex flex-row">
                        <div className="text-gray-400 text-xs font-['Pretendard']s">{arg[2]}</div>
                        {arg[3] != "0" ? (
                          <div className={setColor(parseInt(arg[3]))}>인기 {arg[3]}위</div>
                        ) : (
                          <></>
                        )}
                        <div className="text-gray-400 text-xs font-['Pretendard']">
                          {arg[4]}분 전
                        </div>
                        <div className="flex flex-row gap-[8px] text-gray-400">
                          <Eye size={15} />
                          <div className="text-gray-400 text-xs font-['Pretendard']">{arg[5]}</div>
                        </div>
                        <div className="flex flex-row gap-[8px] text-gray-400">
                          <ThumbsUp size={15} />
                          <div className="text-xs font-['Pretendard']">{arg[6]}</div>
                        </div>
                      </div>
                    </div>
                    <img src={"http://via.placeholder.com/100x100"} alt="" />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default IdPage;
