import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
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
interface CalendarHeadProps {
  wrapChange: ()=>void;
  title: React.JSX.Element;
  moveymd: ({y,m,d,movingway,ref}:MoveYmdProps) =>void;
  fadeymd: ()=>void;
  isequal: boolean;
  issetable: boolean;
  nowref: RefObject<HTMLDivElement>;
}

const CalendarHead = ({
  wrapChange,
  title,
  moveymd,
  fadeymd,
  isequal,
  issetable,
  nowref,
}:CalendarHeadProps) => {
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div onClick={issetable?wrapChange:()=>{}} className="text-3xl font-bold cursor-pointer">
          {title}
          {}
        </div>
        {issetable && (
          <div className="flex items-center gap-2">
            {!isequal && (
              <RotateCcw
                className="h-6 w-6"
                onClick={() => fadeymd()}
                role="button"
              />
            )}
            <ChevronLeft
              className="h-8 w-8"
              onClick={() => moveymd({movingway: "pre", ref: nowref})}
              role="button"
            />
            <ChevronRight
              className="h-8 w-8"
              onClick={() => moveymd({movingway: "nxt", ref: nowref})}
              role="button"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CalendarHead;
