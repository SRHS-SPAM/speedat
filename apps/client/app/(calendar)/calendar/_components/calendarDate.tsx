import { cn } from "@/lib/utils";
import { RefObject, useEffect } from "react";
import { DatesFace, MoveYmdProps } from "../_data/calendarType";

interface CalendarDateProps {
  year: number;
  month: number;
  date: number;
  isgray?: boolean;
  remove?: number[];
  moveymd?: ({ y, m, d, movingway, ref }: MoveYmdProps) => void;
  nowref?: RefObject<HTMLDivElement>;
}

const CalendarDate = ({
  year,
  month,
  date,
  isgray,
  remove,
  moveymd,
  nowref,
}: CalendarDateProps) => {
  const Dates: DatesFace[][] = [];
  const currentDate = new Date();
  const nowy = currentDate.getFullYear();
  const nowm = currentDate.getMonth();
  const nowd = currentDate.getDate();
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
  if (remove != null) {
    Dates.splice(remove[0], remove[1]);
  }

  return (
    <>
      {Dates.map((ai, i) => (
        <div
          key={i}
          className="text-center text-black text-xl font-normal h-full items-center w-full flex justify-stretch">
          {ai.map((aj, j) => (
            <div
              key={j}
              className="cursor-pointer flex items-center justify-center h-full w-full"
              onClick={() => {
                moveymd && nowref && moveymd({ d: aj.date, movingway: aj.mon, ref: nowref });
              }}>
              <div
                className={cn(
                  "select-none hover:bg-yellow-200 w-[60px] h-[60px] flex items-center justify-center rounded-full ",
                  (isgray || aj.mon != "cur") && "text-gray-300",
                  aj.mon == "cur" &&
                    aj.date == nowd &&
                    month == nowm &&
                    year == nowy &&
                    "bg-yellow-300",
                  !isgray &&
                    aj.mon == "cur" &&
                    aj.date == date &&
                    "hover:bg-yellow-300 border-yellow-300 border-2",
                )}>
                {aj.date}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default CalendarDate;
