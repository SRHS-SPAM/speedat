import React from "react";

const days = ["월", "화", "수", "목", "금"];
const times = [
  ["1교시", "8:40 ~ 9:30"],
  ["2교시", "9:40 ~ 10:30"],
  ["3교시", "10:40 ~ 11:30"],
  ["4교시", "11:40 ~ 12:30"],
  ["점삼시간", "12:30 ~ 13:20"],
  ["5교시", "13:20 ~ 14:10"],
  ["6교시", "14:20 ~ 15:10"],
  ["7교시", "15:20 ~ 16:10"],
];
const cls = [
  ["a1", "a2", "a3", "a4", "", "a5", "a6", "a7"],
  ["b1", "b2", "b3", "b4", "", "b5", "b6", "b7"],
  ["c1", "c2", "c3", "c4", "", "c5", "c6", ""],
  ["d1", "d2", "d3", "d4", "", "d5", "d6", "d7"],
  ["e1", "e2", "e3", "e4", "", "e5", "e6", ""],
];

const getWeekDates = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 현재 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  const sunday = today.getDate() - dayOfWeek; // 해당 주의 일요일
  const weekDates = [];

  for (let i = 1; i <= 5; i++) {
    const date = new Date(today.setDate(sunday + i));
    const formattedDate = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
    weekDates.push(formattedDate);
  }

  return weekDates;
};

async function fetchData(grade: any, classes: any) {
  const today = new Date();
  try {
    let response = [];
    let dayss = getWeekDates();
    response = await Promise.all(dayss.map(async (ai, i) => {
      return await fetch(`http://localhost:3000/openApi/api/timeData/${grade}/${classes}/${ai}`, {
        method: "GET",
      })
        .then((r) => r.json())
        .then((r) => r.subjects)
    }
    ));
    console.log(response);
    if (response) {
      return response;
    } else {
      console.log("res.result is not an array or res is undefined");
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

const TimeTablePage = async ({
  searchParams,
}: {
  searchParams: { grade: string | undefined; class: string | undefined };
}) => {
  const result = await fetchData(searchParams.grade===undefined?1:searchParams.grade, searchParams.class===undefined?1:searchParams.class);
  return (
    <div className="w-[1200px] h-screen mb-[119px] flex justify-center items-center">
      <div className="w-[1040px] h-[613px] ">
        <div>
          <div className="text-zinc-900 text-[32px] font-bold font-['Pretendard'] leading-[38.40px]">
            2024년 1학기 시간표
          </div>
          <div className="text-gray-600 text-2xl font-medium font-['Pretendard'] leading-[28.80px]">
            3학년 6반
          </div>
        </div>
        <div className="w-full mt-[24px] h-full">
          <div className=" flex flex-row">
            <div className="w-[140px] h-10 border border-zinc-900 flex-col justify-center items-center inline-flex">
              <div className="text-gray-700 text-lg font-semibold font-['Pretendard'] leading-snug">
                시간
              </div>
            </div>
            {days.map((ai, i) => (
              <div
                key={i}
                className="w-[180px] h-10 border border-zinc-900 flex-col justify-center items-center inline-flex">
                <div className="text-gray-700 text-lg font-semibold font-['Pretendard'] leading-snug">
                  {ai}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              {times.map((ai, i) => (
                <div
                  key={i}
                  className="w-[140px] h-[60px] pt- opacity-70 border border-gray-800 justify-center items-center inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-1 inline-flex">
                    {ai.map((aj, j) => (
                      <div
                        key={j}
                        className="text-gray-800 text-base font-medium font-['Pretendard']">
                        {aj}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {result.map((ai, i) => (
              <div key={i} className="flex flex-col">
                {ai.map((aj, j) => (
                  <div
                    key={j}
                    className="w-[180px] h-[60px] px-[55px] pt-5 pb-[21px] opacity-70 border border-zinc-900 justify-center items-center inline-flex">
                    <div className="text-zinc-900 text-base font-medium font-['Pretendard']">
                      {aj}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeTablePage;
