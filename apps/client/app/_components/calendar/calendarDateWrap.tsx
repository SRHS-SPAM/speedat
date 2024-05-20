import { cn } from "@/lib/utils";
import { RefObject } from "react";
import CalendarDate from "./calendarDate";

interface MoveYmdProps {
  y?: number;
  m?: number;
  d?: number;
  top?: string;
  bot?: string;
  movingway: "pre"|"nxt"|"cur";
  ref: RefObject<HTMLDivElement>;
}

interface CalendarMonthProps {
  ymd: number[];
  isMoving: boolean;
  moveymd: ({y,m,d,movingway,ref}:MoveYmdProps) =>void;
  setymd?: ([]) => void;
  wrapRef: RefObject<HTMLDivElement>;
}
const Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarDateWrap = ({ymd, isMoving, moveymd, setymd, wrapRef}:CalendarMonthProps) => {
  const year = ymd[0];
  const month = ymd[1];
  const date = ymd[2];
  const pre = new Date(year, month - 1, date);
  const nxt = new Date(year, month + 1, date);
  return (
    <div className="flex flex-col w-1/2 h-full">
      <div className="text-center w-full bg-white flex justify-stretch">
        {Day.map((ai, i) => (
          <div key={i} className="w-full select-none">
            {ai}
          </div>
        ))}
      </div>
      <div className="h-full w-full relative overflow-y-hidden">
        <div
          ref={wrapRef}
          className={cn(
            "h-[300%] w-full top-[-100%] absolute flex flex-col justify-stretch opacity-100",
            isMoving && "transition-all ease-ease duration-300"
          )}
        >
          <CalendarDate
            year={pre.getFullYear()}
            month={pre.getMonth()}
            isgray={true}
            date={pre.getDate()}
          />
          <CalendarDate
            year={year}
            month={month}
            date={date}
            moveymd={isMoving || !setymd ? undefined : moveymd}
            nowref={wrapRef}
          />
          <CalendarDate
            year={nxt.getFullYear()}
            month={nxt.getMonth()}
            date={nxt.getDate()}
            isgray={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarDateWrap;