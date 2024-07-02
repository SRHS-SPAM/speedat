import { Eye, ThumbsUp } from "lucide-react";
import Calendar from "../(calendar)/calendar/_components/calendar";
import Image from "next/image";
import Link from "next/link";

const mainPage = () => {
  return (
    <div className="w-[100%] h-[3516px] py-12 flex-col justify-start items-center gap-64 inline-flex">
      <div className="w-[1020px] justify-start items-center gap-7 inline-flex">
        <div className="flex-col justify-start items-start gap-8 inline-flex">
          <div>
            <span className="text-zinc-900 text-[64px] font-bold font-pre leading-[76.80px]">
              서울로봇고등학교
              <br />
              커뮤니티 & 웹사이트
              <br />
            </span>
            <span className="text-yellow-500 text-[64px] font-bold font-pre underline leading-[76.80px]">
              Speedat
            </span>
          </div>
          <div className="text-gray-500 text-xl font-bold font-pre leading-[28.80px]">
            학교에서 일어나는 다양한 이야기를 알아보고 공유 해보세요!
          </div>
        </div>
        <Image
          src="/images/mainPage/main1.svg"
          alt="main1"
          className="dark:invert cursor-pointer"
          width={432}
          height={450}
        />
      </div>
      <div className="flex-col justify-start items-end gap-32 flex">
        <div className="h-[655px] flex-col justify-start items-start gap-12 flex">
          <div className="text-zinc-900 text-5xl font-bold font-pre leading-[57.60px]">달력</div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-[545px] shadow flex-col justify-start items-start inline-flex rounded-xl">
              <Image
                src="/images/mainPage/Calender.jpg"
                alt="main1"
                className="dark:invert cursor-pointer rounded-t-xl"
                width={419}
                height={299}
                priority
              />

              <div className="pb-7 bg-white rounded-bl-[10px] rounded-br-[10px] flex-col justify-start items-center gap-[17px] flex w-[100%]">
                <div className="self-stretch h-[161px] px-6 py-12 flex-col justify-start items-start gap-3 inline-flex">
                  <div className="self-stretch text-zinc-900 text-2xl font-bold font-pre leading-[28.80px]">
                    학교 일정부터 자격증 일정까지!
                  </div>
                  <div className="self-stretch text-gray-500 text-xl font-medium font-pre leading-normal">
                    달력에서 확인하세요!
                  </div>
                </div>
                <div className="w-[371px] px-3 py-2 bg-yellow-500 rounded justify-center items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-6 text-center text-zinc-900 text-sm font-semibold font-pre leading-[16.80px]">
                    달력 바로가기
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[528px] h-[549px]">
              <Calendar />
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-12 flex">
          <div className="flex-col justify-start items-end gap-12 flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="text-zinc-900 text-5xl font-bold font-pre leading-[57.60px]">
                  커뮤니티
                </div>
                <div className="text-gray-500 text-2xl font-bold font-pre leading-[28.80px]">
                  최신글 부터 인기글 그리고 각 과의 게시물을 살펴보고 공유해보세요!
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="h-[124px] px-[22px] py-3 bg-white rounded-[10px] shadow flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                      <div className="h-[47px] pr-[721px] flex-col justify-center items-start gap-[9px] flex">
                        <div className="text-gray-700 text-xl font-semibold font-pre leading-normal">
                          Title 어쩌구 저쩌구
                        </div>
                        <div className="text-gray-600 text-xs font-normal font-pre leading-[14.40px]">
                          Discription 어쩌구 저쩌구
                        </div>
                      </div>
                      <div className="self-stretch h-4 flex-col justify-start items-start gap-2.5 flex">
                        <div className="items-center gap-[18px] inline-flex justify-center">
                          <div className="text-gray-600 text-xs font-normal font-pre">
                            시스템과 게시판
                          </div>
                          <div className="text-gray-600 text-xs font-normal font-pre">30분 전</div>
                          <div className="justify-start items-center gap-2 flex">
                            <div className="text-gray-600 text-xs font-normal gap-2 font-pre flex items-center">
                              <Eye size={18} />
                              56
                            </div>
                          </div>
                          <div className="justify-start items-start gap-2 flex">
                            <div className="text-gray-600 text-xs font-normal gap-2 font-pre flex items-center">
                              <ThumbsUp size={16} />
                              12
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Image
                      src="/images/mainPage/source1.png"
                      alt="main1"
                      className="dark:invert cursor-pointer "
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="h-[124px] px-[22px] py-3 bg-white rounded-[10px] shadow flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                      <div className="h-[47px] pr-[721px] flex-col justify-center items-start gap-[9px] flex">
                        <div className="text-gray-700 text-xl font-semibold font-pre leading-normal">
                          Title 어쩌구 저쩌구
                        </div>
                        <div className="text-gray-600 text-xs font-normal font-pre leading-[14.40px]">
                          Discription 어쩌구 저쩌구
                        </div>
                      </div>
                      <div className="self-stretch h-4 flex-col justify-start items-start gap-2.5 flex ">
                        <div className="justify-start items-end gap-[18px] inline-flex">
                          <div className="text-gray-600 text-xs font-normal font-pre leading-[14.40px]">
                            시스템과 게시판
                          </div>
                          <div className="text-gray-600 text-xs font-normal font-pre leading-[14.40px]">
                            인기 15위
                          </div>
                          <div className="text-gray-600 text-xs font-normal font-pre leading-[14.40px]">
                            30분 전
                          </div>
                          <div className="justify-start items-start gap-2 flex">
                            <div className="text-gray-600 text-xs font-normal gap-2 font-pre flex items-center">
                              <Eye size={18} />
                              56
                            </div>
                          </div>
                          <div className="justify-start items-start gap-2 flex">
                            <div className="text-gray-600 text-xs font-normal gap-2 font-pre flex items-center">
                              <ThumbsUp size={16} />
                              12
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Image
                      src="/images/mainPage/source2.png"
                      alt="main1"
                      className="dark:invert cursor-pointer "
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="h-[124px] px-[22px] py-3 bg-white rounded-[10px] shadow flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                      <div className="h-[47px] pr-[721px] flex-col justify-center items-start gap-[9px] flex">
                        <div className="text-gray-700 text-xl font-semibold font-pre leading-normal">
                          Title 어쩌구 저쩌구
                        </div>
                        <div className="text-gray-600 text-xs font-normal font-pre leading-[14.40px]">
                          Discription 어쩌구 저쩌구
                        </div>
                      </div>
                      <div className="self-stretch h-4 flex-col justify-start items-start gap-2.5 flex">
                        <div className="justify-start items-end gap-[18px] inline-flex">
                          <div className="text-gray-600 text-xs font-normal font-pre leading-[14.40px]">
                            시스템과 게시판
                          </div>
                          <div className="text-gray-600 text-xs font-normal font-pre leading-[14.40px]">
                            30분 전
                          </div>
                          <div className="justify-start items-start gap-2 flex">
                            <div className="text-gray-600 text-xs font-normal gap-2 font-pre flex items-center">
                              <Eye size={18} />
                              56
                            </div>
                          </div>
                          <div className="justify-start items-start gap-2 flex">
                            <div className="text-gray-600 text-xs font-normal gap-2 font-pre flex items-center">
                              <ThumbsUp size={16} />
                              12
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Image
                      src="/images/mainPage/source3.png"
                      alt="main1"
                      className="dark:invert cursor-pointer "
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 h-12 px-3 py-2 bg-yellow-500 rounded justify-start items-center gap-1 inline-flex">
              <div className="grow shrink basis-0 h-6 text-center text-zinc-900 text-sm font-semibold font-pre leading-[16.80px]">
                커뮤니티 바로가기
              </div>
            </div>
          </div>
        </div>
        <div className="h-[580px] flex-col justify-start items-start gap-12 flex">
          <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
            <div className="text-zinc-900 text-5xl font-bold font-pre leading-[57.60px]">
              급식표
            </div>
          </div>
          <div className="justify-start items-start gap-5 inline-flex">
            <div className="w-[326px] h-[474px] shadow flex-col justify-start items-start inline-flex">
              <img
                className="w-[326px] h-[228px] relative rounded-tl-[10px] rounded-tr-[10px]"
                src="https://via.placeholder.com/326x228"
              />
              <div className="self-stretch h-[246px] bg-white rounded-bl-[10px] rounded-br-[10px] flex-col justify-center items-center gap-2.5 flex">
                <div className="w-[326px] h-[246px] px-6 py-12 flex-col justify-start items-center gap-[72px] flex">
                  <div className="self-stretch h-[19px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-gray-500 text-base font-medium font-pre leading-tight">
                      급식에서 조식을 확인하세요!
                    </div>
                  </div>
                  <div className="w-[278px] px-3 py-2 bg-yellow-500 rounded justify-center items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 h-6 text-center text-zinc-900 text-sm font-semibold font-pre leading-[16.80px]">
                      조식 바로가기
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[326px] h-[474px] shadow flex-col justify-start items-start inline-flex">
              <img
                className="w-[326px] h-[228px] relative rounded-tl-[10px] rounded-tr-[10px]"
                src="https://via.placeholder.com/326x228"
              />
              <div className="self-stretch h-[246px] bg-white rounded-bl-[10px] rounded-br-[10px] flex-col justify-center items-center gap-2.5 flex">
                <div className="w-[326px] h-[246px] px-6 py-12 flex-col justify-start items-center gap-[72px] flex">
                  <div className="self-stretch h-[55px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-zinc-900 text-xl font-bold font-pre leading-normal">
                      4교시 후 즐거운 점심시간!
                    </div>
                    <div className="self-stretch text-gray-500 text-base font-medium font-pre leading-tight">
                      급식에서 중식을 확인하세요!
                    </div>
                  </div>
                  <div className="w-[278px] px-3 py-2 bg-yellow-500 rounded justify-center items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 h-6 text-center text-zinc-900 text-sm font-semibold font-pre leading-[16.80px]">
                      중식 바로가기
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[326px] h-[474px] shadow flex-col justify-start items-start inline-flex">
              <img
                className="w-[326px] h-[228px] relative rounded-tl-[10px] rounded-tr-[10px]"
                src="https://via.placeholder.com/326x228"
              />
              <div className="self-stretch h-[246px] bg-white rounded-bl-[10px] rounded-br-[10px] flex-col justify-center items-center gap-2.5 flex">
                <div className="w-[326px] h-[246px] px-6 py-12 flex-col justify-start items-center gap-[72px] flex">
                  <div className="self-stretch h-[55px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch text-zinc-900 text-xl font-bold font-pre leading-normal">
                      편의점이나 갈까?
                    </div>
                    <div className="self-stretch text-gray-500 text-base font-medium font-pre leading-tight">
                      급식에서 석식을 확인하세요!
                    </div>
                  </div>
                  <div className="w-[278px] px-3 py-2 bg-yellow-500 rounded justify-center items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 h-6 text-center text-zinc-900 text-sm font-semibold font-pre leading-[16.80px]">
                      석식 바로가기
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-end gap-12 flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="w-[1020px] justify-start items-start gap-2.5 inline-flex">
              <div className="text-zinc-900 text-5xl font-bold font-pre leading-[57.60px]">
                시간표
              </div>
            </div>
            <div className="text-gray-500 text-2xl font-bold font-pre leading-[28.80px]">
              오늘의 시간표와 과목을 확인해보세요!
            </div>
          </div>
          <div className="h-[345px] bg-white rounded-[10px] shadow flex-col justify-start items-end gap-2.5 flex">
            <div className="self-stretch h-[345px] justify-start items-center inline-flex">
              <div className="w-[543px] self-stretch flex-col justify-start items-start inline-flex">
                <img
                  className="w-[543px] grow shrink basis-0"
                  src="https://via.placeholder.com/543x345"
                />
              </div>
              <div className="grow shrink basis-0 px-12 flex-col justify-start items-start gap-[72px] inline-flex">
                <div className="self-stretch h-[84px] px-3 flex-col justify-start items-end gap-3 flex">
                  <div className="self-stretch text-right text-black text-4xl font-bold font-pre leading-[43.20px]">
                    1교시 : 로봇 디자인
                  </div>
                  <div className="self-stretch text-right text-gray-500 text-2xl font-bold font-pre leading-[28.80px]">
                    다음 교시 : 로봇 디자인
                  </div>
                </div>
                <div className="self-stretch h-12 px-3 py-2 bg-yellow-500 rounded justify-start items-center gap-1 inline-flex">
                  <div className="grow shrink basis-0 h-6 text-center text-zinc-900 text-sm font-semibold font-pre leading-[16.80px]">
                    시간표 바로가기
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainPage;
