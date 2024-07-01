"use client";

import { cn } from "@/lib/utils";
import { Dispatch, ElementRef, SetStateAction, useRef, useState } from "react";
import CalendarHead from "./calendarHead";
import CalendarDateWrap from "./calendarDateWrap";
import CalendarYearWrap from "./calendarYearWrap";
import { MoveYmdProps } from "../_data/calendarType";
import { Month } from "../_data/datas";

interface CalendarProps {
  ymd: number[];
  setymd?: Dispatch<SetStateAction<number[]>>;
}

const Calender = ({ ymd, setymd }: CalendarProps) => {
  const currentDate = new Date();
  const nowy = currentDate.getFullYear();
  const nowm = currentDate.getMonth();
  const nowd = currentDate.getDate();
  const year = ymd[0];
  const month = ymd[1];
  const date = ymd[2];
  const [isMoving, setIsMoving] = useState(false);
  const [isMonth, setIsMonth] = useState(true);
  const year8 = Math.floor(year / 8) * 8;

  const wrapRef = useRef<ElementRef<"div">>(null);
  const wrapYearRef = useRef<ElementRef<"div">>(null);
  const wrapWrapRef = useRef<ElementRef<"div">>(null);
  const [nowRef, setNowRef] = useState(wrapRef);

  const moveymd = ({ y, m, d, top, bot, movingway, ref }: MoveYmdProps) => {
    if (!isMoving) {
      let tt = y ? 0 : movingway == "cur" ? 0 : movingway == "nxt" ? 1 : -1;
      let ty = 0,
        tm = 0,
        td = 0;
      if (isMonth) {
        tm = tt;
      } else {
        ty = tt * 8;
      }
      if (tm + month < 0) {
        ty = -1;
      } else if (tm + month >= 12) {
        ty = 1;
      }
      let ry = y ? y : year + ty,
        rm = m ? m : (month + tm + 12) % 12,
        rd = d ? d : date + td;
      let prepct = top ? top : !isMonth ? "-33.4%" : "0%",
        nxtpct = bot ? bot : !isMonth ? "-166.6%" : "-200%";
      //console.log(ry, rm, rd, y, m, d, prepct, nxtpct);
      if (setymd) {
        if (movingway == "cur") {
          setymd([ry, rm, rd]);
        } else if (ref.current?.style.top != null) {
          setIsMoving(true);
          if (movingway == "pre") ref.current.style.top = prepct;
          else if (movingway == "nxt") ref.current.style.top = nxtpct;
          setTimeout(() => {
            if (ref.current?.style.top != null) {
              ref.current.style.top = "-100%";
            }
            setIsMoving(false);
            setymd([ry, rm, rd]);
          }, 500);
        }
      }
    }
  };

  const fadeymd = () => {
    if (setymd && !isMoving) {
      setIsMoving(true);
      if (wrapWrapRef.current?.style.opacity != null) {
        wrapWrapRef.current.style.opacity = "0";
      }
      setTimeout(() => {
        setymd([nowy, nowm, nowd]);
        if (wrapWrapRef.current?.style.opacity != null) {
          wrapWrapRef.current.style.opacity = "1";
        }
        setTimeout(() => {
          setIsMoving(false);
        }, 300);
      }, 300);
    }
  };

  const wrapChange = () => {
    if (!isMoving) {
      setIsMoving(true);
      if (wrapWrapRef.current?.style.left != null) {
        if (isMonth) {
          wrapWrapRef.current.style.left = "-100%";
        } else {
          wrapWrapRef.current.style.left = "0%";
        }
        setTimeout(() => {
          setIsMoving(isMoving);
          setNowRef(!isMonth ? wrapRef : wrapYearRef);
          setIsMonth(!isMonth);
        }, 300);
      }
    }
  };

  return (
    <div className="flex flex-col items-start w-full h-full">
      <CalendarHead
        fadeymd={fadeymd}
        isequal={nowy == year && nowm == month && nowd == date}
        issetable={setymd == undefined ? false : true}
        moveymd={moveymd}
        title={
          !isMonth ? (
            <>
              {year8} ~ {year8 + 8}
            </>
          ) : (
            <>
              {Month[month]} {year}
            </>
          )
        }
        wrapChange={wrapChange}
        nowref={nowRef}
      />
      <div className="mt-8 text-gray-300 w-full h-full relative overflow-x-hidden font-light">
        <div
          ref={wrapWrapRef}
          className={cn(
            "absolute w-[200%] left-0 h-full flex",
            isMoving && "transition-all ease-ease duration-300",
          )}>
          <CalendarDateWrap
            isMoving={isMoving}
            wrapRef={wrapRef}
            ymd={ymd}
            moveymd={moveymd}
            setymd={setymd}
          />
          {setymd && (
            <CalendarYearWrap
              isMoving={isMoving}
              wrapRef={wrapYearRef}
              ymd={ymd}
              moveymd={moveymd}
              wrapChange={wrapChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Calender;
