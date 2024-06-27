import { ChevronLeft } from "lucide-react";
import Image from "next/image";
const inId = {
  title: "사회적 기업의 가치와 영향력",
  name: "커피중독자",
  tab: "시스템과 게시판",
  best: "1",
  time: "10",
  main: "뭔 동물인지는 모르겠지만 멍청하게 생김\n쥐목 천축서과 카피바라아과 카피바라속에 속하는 포유류.  캐피바라라고 부르기도 한다.콜롬비아, 베네수일라, 브라질, 파라과이, 우루과이, 아르헨티나 등의  남미 국가 여러 곳에 서식하며 이름은 고(古) 투피어로  '가느다란 잎을 먹는 동물'이라는 뜻인 카피이와라(kapi'iûara)에서 왔다. 한편 한자이름은 과명과 동일한 천축서(天竺鼠)로,  '천축'은 인도, '서'는 쥐를 의미하는 한자다. 즉, '인도쥐'란 뜻인데, 정작 카피바라를 비롯한  천축서과 동물들 대부분은 남미원산이다.",
};
const IdPage = () => {
  const setColor = (num: string) => {
    switch (num) {
      case "1":
        return "text-[#edb900] text-xs font-['Pretendard']";
      case "2":
        return "text-[#919191] text-xs font-['Pretendard']";
      case "3":
        return "text-[#bb4300] text-xs font-['Pretendard']";
      default:
        return "text-gray-600 text-xs font-['Pretendard']";
    }
  };
  return (
    <div className="w-[100%] flex flex-col pt-12 px-8 pb-8">
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
                      <div className={setColor(inId.best)}>인기 {inId.best}위</div>
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
      <div>
        <div className="text-zinc-900 text-xl font-normal font-['Pretendard']">{inId.main}</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default IdPage;
