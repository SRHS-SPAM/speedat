import { cn } from "@/lib/utils";
import { Dispatch, RefObject, SetStateAction } from "react";
import CalendarDate from "./calendarDate";
import { MoveYmdProps } from "../_data/calendarType";
import { Day } from "../_data/datas";

interface CalendarMonthProps {
  ymd: number[];
  isMoving: boolean;
  moveymd: ({ y, m, d, movingway, ref }: MoveYmdProps) => void;
  setymd?: Dispatch<SetStateAction<number[]>>;
  wrapRef: RefObject<HTMLDivElement>;
}

const CalendarDateWrap = ({ ymd, isMoving, moveymd, setymd, wrapRef }: CalendarMonthProps) => {
  const year = ymd[0];
  const month = ymd[1];
  const date = ymd[2];
  const pre = new Date(year, month - 1, date);
  const nxt = new Date(year, month + 1, date);
  return (
    <div className="flex flex-col w-1/2 h-full">
      <div className="text-center w-full bg-white flex justify-stretch">
        {Day.map((ai, i) => (
          <div
            key={i}
            className="w-full mb-[24px] select-none h-4 text-center text-zinc-900 text-xs font-semibold font-['Pretendard'] leading-[14.40px]">
            {ai}
          </div>
        ))}
      </div>
      <div className="h-full w-full relative overflow-y-hidden">
        <div
          ref={wrapRef}
          className={cn(
            "h-[300%] w-full top-[-100%] absolute flex flex-col justify-stretch opacity-100",
            isMoving && "transition-all ease-ease duration-300",
          )}>
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
