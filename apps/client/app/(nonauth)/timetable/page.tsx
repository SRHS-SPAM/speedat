import Link from "next/link";
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

async function fetchData(grade: any, classes: any): Promise<string[][]> {
  const today = new Date();
  try {
    let response = [];
    let dayss = getWeekDates();
    response = await Promise.all(
      dayss.map(async (ai, i) => {
        return await fetch(`http://localhost:3000/openApi/api/timeData/${grade}/${classes}/${ai}`, {
          method: "GET",
        })
          .then((r) => r.json())
          .then((r) => r.subjects);
      }),
    );
    if (response) {
      return response;
    } else {
      console.log("res.result is not an array or res is undefined");
      return cls;
    }
  } catch (error) {
    console.error(error);
    return cls;
  }
}

const TimeTablePage = async ({
  searchParams,
}: {
  searchParams: { grade: string | undefined; class: string | undefined };
}) => {
  const result = await fetchData(
    searchParams.grade === undefined ? "1" : searchParams.grade,
    searchParams.class === undefined ? "1" : searchParams.class,
  );
  const searchGrade = searchParams.grade === undefined ? "1" : searchParams.grade;
  const searchClass = searchParams.class === undefined ? "1" : searchParams.class;
  const resultGrade = parseInt(searchGrade) >= 3 ? 1 : parseInt(searchGrade) + 1;
  const resultClass = parseInt(searchClass) >= 8 ? 1 : parseInt(searchClass) + 1;
  return (
    <div className="w-full lg:w-[1200px] mb-[119px] flex justify-center items-center 2xl">
      <div className="w-full max-w-[1040px] h-[613px]">
        <div>
          <div className="text-zinc-900 text-[24px] md:text-[32px] lg:text-[48px] font-bold font-['Pretendard'] leading-tight">
            2024년 1학기 시간표
          </div>
          <div className="text-gray-600 text-xl md:text-2xl lg:text-3xl font-medium font-['Pretendard'] leading-tight">
            <span className="text-yellow-500 underline">
              <Link
                href={{
                  pathname: "/timetable",
                  query: { grade: resultGrade, class: searchClass },
                }}>
                {searchGrade}
              </Link>
            </span>
            <span>학년&nbsp;</span>
            <span className="text-yellow-500 underline">
              <Link
                href={{
                  pathname: "/timetable",
                  query: { class: resultClass, grade: searchGrade },
                }}>
                {searchClass}
              </Link>
            </span>
            <span>반</span>
          </div>
        </div>
        <div className="w-full mt-[24px] h-full">
          <div className="flex flex-row">
            <div className="w-[70px] md:w-[100px] lg:w-[140px] h-[40px] md:h-10 border border-zinc-900 flex-col justify-center items-center inline-flex">
              <div className="text-gray-700 text-sm md:text-md lg:text-lg font-semibold font-['Pretendard'] leading-snug">
                시간
              </div>
            </div>
            {days.map((ai, i) => (
              <div
                key={i}
                className="w-[70px] md:w-[100px] lg:w-[180px] h-[40px] md:h-10 border border-zinc-900 flex-col justify-center items-center inline-flex">
                <div className="text-gray-700 text-sm md:text-md lg:text-lg font-semibold font-['Pretendard'] leading-snug">
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
                  className="w-[70px] md:w-[100px] lg:w-[140px] h-[40px] md:h-[40px] lg:h-[60px] opacity-70 border border-gray-800 justify-center items-center inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-1 inline-flex">
                    {ai.map((aj, j) => (
                      <div
                        key={j}
                        className="text-zinc-900 text-xs md:text-sm lg:text-base font-medium font-['Pretendard']">
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
                    className="w-[70px] md:w-[100px] lg:w-[180px] h-[40px] md:h-[40px] lg:h-[60px] opacity-70 border border-zinc-900 justify-center items-center inline-flex">
                    <div className="text-zinc-900 text-xs md:text-sm lg:text-base font-medium font-['Pretendard']">
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
