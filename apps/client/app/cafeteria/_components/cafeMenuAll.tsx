"use client";
import { DatesFace } from "@/app/(calendar)/calendar/_data/calendarType";
import { cn } from "@/lib/utils";
import { useState } from "react";
import CafeMenuAllPane from "./cafeMenuAllPane";

const sick = ["조식", "중식", "석식"];

const CafeMenuAll = () => {
  const [selected, setSelected] = useState(1);
  const Dates: DatesFace[][] = [];
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const preMonthDate = new Date(year, month, 0);
  const preMonthDay = preMonthDate.getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();
  Dates.push([{ date: preMonthDate.getDate(), mon: "pre" }]);

  for (let i = 0; i < preMonthDay; i++) {
    Dates[0].unshift({ date: preMonthDate.getDate() - i - 1, mon: "pre" });
  }
  for (let i = 0; i < 6; i++) {
    for (; Dates[i].length < 7; ) {
      const len = Dates[i].length - 1;
      if (Dates[i][len].mon == "pre") {
        Dates[i].push({ date: 1, mon: "cur" });
      } else if (Dates[i][len].date == lastDay) {
        Dates[i].push({ date: 1, mon: "nxt" });
      } else {
        Dates[i].push({
          date: Dates[i][len].date + 1,
          mon: Dates[i][len].mon,
        });
      }
    }
    if (i < 5) {
      if (Dates[i][6].mon == "pre") {
        Dates.push([{ date: 1, mon: "cur" }]);
      } else if (Dates[i][6].mon == "cur" && Dates[i][6].date == lastDay) {
        Dates.push([{ date: 1, mon: "nxt" }]);
      } else {
        Dates.push([{ date: Dates[i][6].date + 1, mon: Dates[i][6].mon }]);
      }
    }
  }
  return (
    <>
      <div className="mt-32 w-[900px]">
        <div className="flex justify-stretch w-full h-[40px] mb-8">
          {sick.map((ai, i) => (
            <div
              key={i}
              className={cn(
                "w-full border-[0.5px] flex items-center justify-center bg-neutral-100 font-semibold cursor-pointer",
                i + 1 == selected && "bg-white",
              )}
              onClick={() => {
                setSelected(i + 1);
              }}>
              {ai}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 w-full gap-[1px] p-[1px] bg-neutral-800">
          {["월", "화", "수", "목", "금"].map((ai, i) => {
            return (
              <div
                key={i}
                className="bg-white w-full h-[40px] flex items-center justify-center font-semibold">
                {ai}
              </div>
            );
          })}
          {Dates.map((ai, i) => {
            return ai.map((aj, j) => {
              if (!(j == 0 || j == 6))
                return (
                  <CafeMenuAllPane key={i * 10 + j} date={aj.date} mon={aj.mon} menu={selected} />
                );
            });
          })}
        </div>
      </div>
    </>
  );
};
export default CafeMenuAll;
