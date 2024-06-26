import React from "react";

const days = [
  ["일", "9"],
  ["월", "10"],
  ["화", "11"],
  ["수", "12"],
  ["목", "13"],
  ["금", "14"],
  ["토", "15"],
];

const times = [
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 AM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

const calander = () => {
  return (
    <div className="w-[1440px] h-[1500px] relative bg-white">
      <div className="px-6 py-2.5 left-[240px] top-[95px] absolute justify-center items-center gap-2.5 inline-flex">
        <div className="text-zinc-900 text-[32px] font-semibold font-['Pretendard'] leading-[38.40px]">
          2024년 6월
        </div>
      </div>
      <div className="p-6 left-[240px] top-[153px] absolute flex-col justify-start items-end gap-3 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="flex flex-row">
            {days.map((ai, i) => (
              <div key={i} className="w-[120px] h-[30px] justify-center items-center gap-2.5 flex">
                <div className="text-gray-700 text-xs font-semibold font-['Pretendard'] leading-[14.40px] flex flex-row">
                  {ai.map((aj, j) => (
                    <div
                      key={j}
                      className="text-gray-700 text-xs font-semibold font-['Pretendard'] leading-[14.40px] pl-[10px]">
                      {aj}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-start items-center gap-3 inline-flex">
          <div className="flex-col justify-start items-center gap-8 inline-flex">
            {times.map((ai, i) => (
              <div
                key={i}
                className="text-zinc-900 text-[8px] font-semibold font-['Pretendard'] leading-[9.60px] flex-col">
                {ai}
              </div>
            ))}
          </div>
          <div className="justify-start items-end flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative bg-blue-500"></div>
              <div className="w-[120px] h-[42px] bg-blue-500 justify-center items-center inline-flex">
                <div className="text-zinc-900 text-[8px] font-semibold font-['Pretendard'] leading-[9.60px]">
                  수행평가
                </div>
              </div>
              <div className="w-[120px] h-[42px] relative bg-blue-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative bg-gray-100 border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative bg-gray-300"></div>
              <div className="w-[120px] h-[42px] relative bg-gray-300"></div>
              <div className="w-[120px] h-[42px] pt-[18px] pb-3.5 bg-gray-300 justify-center items-center inline-flex">
                <div className="text-zinc-900 text-[8px] font-semibold font-['Pretendard'] leading-[9.60px]">
                  중간고사
                </div>
              </div>
              <div className="w-[120px] h-[42px] relative bg-gray-300"></div>
              <div className="w-[120px] h-[42px] relative bg-gray-300"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
              <div className="w-[120px] h-[42px] relative border border-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[276px] h-[666px] left-[1164px] top-[61px] absolute border border-gray-400">
        <div className="px-2 py-1 left-[61px] top-[600px] absolute"></div>
        <div className="px-2 py-1 left-[192px] top-[600px] absolute"></div>
        <div className="left-[18px] top-[29px] absolute flex-col justify-start items-center gap-16 inline-flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="justify-start items-center gap-[119px] inline-flex">
              <div className="text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                2024년 6월
              </div>
              <div className="justify-start items-start gap-3 flex">
                <div className="w-6 h-6 relative"></div>
                <div className="w-6 h-6 relative"></div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-start gap-3 inline-flex">
                <div className="p-1 justify-center items-center flex">
                  <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                    일
                  </div>
                </div>
                <div className="p-1 justify-center items-center flex">
                  <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                    월
                  </div>
                </div>
                <div className="p-1 justify-center items-center flex">
                  <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                    화
                  </div>
                </div>
                <div className="p-1 justify-center items-center flex">
                  <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                    수
                  </div>
                </div>
                <div className="p-1 justify-center items-center flex">
                  <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                    목
                  </div>
                </div>
                <div className="p-1 justify-center items-center flex">
                  <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                    금
                  </div>
                </div>
                <div className="p-1 justify-center items-center flex">
                  <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                    토
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      26
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      27
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      28
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      29
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      30
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      31
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      1
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      2
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      3
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      4
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      5
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      6
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      7
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      8
                    </div>
                  </div>
                </div>
                <div className="bg-gray-300 justify-start items-start gap-3 inline-flex">
                  <div className="w-6 h-6 p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      9
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      10
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      11
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-yellow-500 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      12
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      13
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      14
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      15
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      16
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      17
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      18
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      19
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      20
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      21
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      22
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      23
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      24
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      25
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      26
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      27
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      28
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      29
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      30
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      1
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      2
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      3
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      4
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      5
                    </div>
                  </div>
                  <div className="p-1 justify-center items-center flex">
                    <div className="w-4 h-4 text-center text-gray-300 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
                      6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
              메모
            </div>
            <div className="py-2.5 flex-col justify-start items-start gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-[17px] flex">
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="h-[16.50px] flex-col justify-start items-start gap-0.5 flex">
                    <div className="px-1 justify-start items-start inline-flex">
                      <div className="text-gray-400 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                        제목
                      </div>
                    </div>
                    <div className="w-60 h-[0.50px] relative bg-gray-400"></div>
                  </div>
                  <div className="w-60 h-[120px] relative">
                    <div className="w-60 h-[120px] px-2 py-3 left-0 top-0 absolute rounded border border-gray-700 justify-start items-start gap-1 inline-flex">
                      <div className="grow shrink basis-0 text-gray-700 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                        메모 입력
                      </div>
                    </div>
                    <div className="w-6 h-6 left-[205px] top-[85px] absolute"></div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-8 inline-flex">
                  <div className="w-4 h-4 relative"></div>
                  <div className="justify-center items-center gap-6 flex">
                    <div className="text-zinc-900 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                      4:00 AM
                    </div>
                    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-zinc-900 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                        ~
                      </div>
                    </div>
                    <div className="text-zinc-900 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                      5:00 AM
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-8 inline-flex">
                  <div className="w-4 h-4 relative bg-red-500 rounded-2xl"></div>
                  <div className="text-zinc-900 text-xs font-normal font-['Pretendard'] leading-[14.40px]">
                    메모 컬러 변경
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

export default calander;
