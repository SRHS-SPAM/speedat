"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { CafeMenuPaneProps } from "../page";
import CafeMenuPane from "./cafeMenuPane";
import { useState, useRef, useEffect } from "react";

interface CafeMenuProps {
  data: CafeMenuPaneProps[];
}

const CafeMenu = ({ data }: CafeMenuProps) => {
  const panewrapref = useRef(null);
  const [select, setSelect] = useState(0);
  useEffect(() => {
    panewrapref.current?.style.setProperty("margin-left", -550 * select + "px");
  }, [select]);
  let datalen = data.length;
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex justify-center items-stretch mb-[90px]">
        <div
          className="mx-16 flex justify-center"
          onClick={() => setSelect((select + datalen - 1) % datalen)}>
          <ChevronLeft className="text-yellow-400 h-full cursor-pointer" width={71 } height={71 } />
        </div>
        <div className="relative w-[400px] h-[500px] overflow-hidden">
          <div
            className="absolute w-[1500px] flex justify-between z-[-1] transition-all"
            ref={panewrapref}>
            {data.map((ai, i) => (
              <CafeMenuPane data={ai.data} title={ai.title} key={i} />
            ))}
          </div>
        </div>
        <div
          className="mx-16 flex justify-center"
          onClick={() => setSelect((select + datalen + 1) % datalen)}>
          <ChevronRight className="text-yellow-400 h-full cursor-pointer" width={71} height={71} />
        </div>
      </div>
      <div className="flex justify-center gap-8">
        {data.map((ai, i) => {
          if (i === select)
            return (
              <div
                className="cursor-pointer h-5 w-16 rounded-full bg-yellow-400 transition-all"
                key={i}
              />
            );
          else
            return (
              <div
                className="cursor-pointer h-5 w-5 rounded-full bg-slate-400 transition-all"
                onClick={() => setSelect(i)}
                key={i}
              />
            );
        })}
      </div>
    </div>
  );
};

export default CafeMenu;
