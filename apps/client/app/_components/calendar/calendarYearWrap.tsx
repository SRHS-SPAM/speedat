import { cn } from "@/lib/utils";
import CalendarYear from "./calendarYear";
import { RefObject } from "react";

interface MoveYmdProps {
  y?: number;
  m?: number;
  d?: number;
  top?: string;
  bot?: string;
  movingway: "pre"|"nxt"|"cur";
  ref: RefObject<HTMLDivElement>;
}
interface CalendarYearProps {
  ymd: number[];
  isMoving: boolean;
  moveymd: ({y,m,d,movingway,ref}:MoveYmdProps) =>void;
  wrapRef: any; //이건 또 뭘려나
  wrapChange: ()=>void;
}
const CalendarYearWrap = ({
  ymd,
  isMoving,
  moveymd,
  wrapRef,
  wrapChange,
}: CalendarYearProps) => {
  const year = ymd[0];
  return (
    <div className="w-1/2 flex flex-col h-full">
      <div className="h-full w-full relative overflow-y-hidden">
        <div
          ref={wrapRef}
          className={cn(
            "h-[300%] w-full top-[-100%] absolute flex flex-col justify-center opacity-100",
            isMoving && "transition-all ease-ease duration-300"
          )}
        >
          <CalendarYear
            year={year-8}
            isgray={true}
            rmline={2}
            apline={"up"}
          />
          <CalendarYear
            year={year}
            moveymd={isMoving ? undefined : moveymd}
            nowref={wrapRef}
            wrapChange={wrapChange}
          />
          <CalendarYear
            year={year+8}
            isgray={true}
            rmline={0}
            apline={"dwn"}
        />
        </div>
      </div>
    </div>
  );
};

export default CalendarYearWrap;
