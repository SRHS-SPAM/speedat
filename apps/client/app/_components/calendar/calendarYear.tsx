import { cn } from "@/lib/utils";
import { RefObject, useEffect } from "react";

interface CalendarYearAroundProps {
  year: number;
  isgray?: boolean;
  rmline?: number;
  apline?: "dwn" | "up";
  moveymd?: ({ y, m, d, movingway, ref }: MoveYmdProps) => void;
  wrapChange?: ()=>void;
  nowref?: RefObject<HTMLDivElement>;
}
interface YearsFace {
  year: number;
  mon: "pre" | "cur" | "nxt";
}
interface MoveYmdProps {
  y?: number;
  m?: number;
  d?: number;
  top?: string;
  bot?: string;
  movingway: "pre" | "nxt" | "cur";
  ref: RefObject<HTMLDivElement>;
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
  const Years: YearsFace[][] = [];
  const nowy = new Date().getFullYear();
  const year8 = Math.floor(year / 8) * 8;
  let lcnt;
  for (let i = (lcnt = 0); i < 3; i++) {
    if (rmline === undefined || (rmline !== undefined && i != rmline)) {
      Years.push([]);
      for (let j = 0; j < 4; j++) {
        let t = i * 4 + j - 2;
        Years[lcnt].push({
          year: t + year8,
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
          className="text-center text-black text-xl font-normal items-center h-full w-full flex justify-stretch"
        >
          {ai.map((aj, j) => (
            <div
              key={j}
              className="flex items-center justify-center h-full w-full"
            >
              <div
                className={cn(
                  "cursor-pointer select-none hover:bg-yellow-200 w-[100px] h-[100px] flex items-center justify-center rounded-full ",
                  (isgray || aj.mon != "cur") && "text-gray-300",
                  aj.year == nowy && "bg-yellow-300",
                  !isgray &&
                    aj.year == year &&
                    "hover:bg-yellow-300 border-yellow-300 border-4"
                )}
                onClick={() => {
                  moveymd &&
                    nowref &&
                    moveymd({
                      y: aj.year,
                      movingway: aj.mon,
                      ref: nowref,
                      top: "-33.4%",
                      bot: "-166.6%",
                    });
                    aj.mon == "cur" && wrapChange && wrapChange()
                }}
              >
                {aj.year}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarYear;
