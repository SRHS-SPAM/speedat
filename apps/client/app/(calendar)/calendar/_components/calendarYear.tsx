import { cn } from "@/lib/utils";
import { RefObject } from "react";
import { DatesFace, MoveYmdProps } from "../_data/calendarType";

interface CalendarYearAroundProps {
  year: number;
  isgray?: boolean;
  rmline?: number;
  apline?: "dwn" | "up";
  moveymd?: ({ y, m, d, movingway, ref }: MoveYmdProps) => void;
  wrapChange?: () => void;
  nowref?: RefObject<HTMLDivElement>;
}

const CalendarYear = ({
  year,
  isgray,
  rmline,
  moveymd,
  wrapChange,
  nowref,
  apline,
}: CalendarYearAroundProps) => {
  const Years: DatesFace[][] = [];
  const nowy = new Date().getFullYear();
  const year8 = Math.floor(year / 8) * 8;
  let lcnt;
  for (let i = (lcnt = 0); i < 3; i++) {
    if (rmline === undefined || (rmline !== undefined && i != rmline)) {
      Years.push([]);
      for (let j = 0; j < 4; j++) {
        let t = i * 4 + j - 2;
        Years[lcnt].push({
          date: t + year8,
          mon: t < 0 ? "pre" : t >= 8 ? "nxt" : "cur",
        });
      }
      lcnt++;
    }
  }
  for (; Years.length < 3; ) {
    if (apline !== undefined && apline == "up") Years.unshift([]);
    else if (apline !== undefined) Years.push([]);
  }
  return (
    <div className="flex h-full w-full flex-col flex-1">
      {Years.map((ai, i) => (
        <div
          key={i}
          className="text-center text-black text-xs font-normal items-center h-full w-full flex justify-stretch">
          {ai.map((aj, j) => (
            <div key={j} className="flex items-center justify-center h-full w-full">
              <div
                className={cn(
                  "cursor-pointer select-none hover:bg-yellow-200 w-[30px] h-[30px] flex items-center justify-center rounded-full ",
                  (isgray || aj.mon != "cur") && "text-gray-300",
                  aj.date == nowy && "bg-yellow-300",
                  !isgray && aj.date == year && "hover:bg-yellow-300 border-yellow-300 border-4",
                )}
                onClick={() => {
                  moveymd &&
                    nowref &&
                    moveymd({
                      y: aj.date,
                      movingway: aj.mon,
                      ref: nowref,
                      top: "-33.4%",
                      bot: "-166.6%",
                    });
                  aj.mon == "cur" && wrapChange && wrapChange();
                }}>
                {aj.date}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarYear;
