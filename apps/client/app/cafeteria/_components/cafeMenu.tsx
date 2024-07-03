import { ChevronLeft, ChevronRight } from "lucide-react";
import { CafeMenuPaneProps } from "../page";
import CafeMenuPane from "./cafeMenuPane";
import { useState, useRef, useEffect } from "react";

const CafeMenu = async () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth()+1;
  const date = currentDate.getDate();

  const data = [{
    data: await fetch(`http://localhost:3000/openApi/api/mealData/1/${year *10000 + month *100+ date}`, {
      cache: "no-store",
      method: "GET",
    }).then((r) => r.json()).then((r)=>( r.error ? ["급식 정보가 없습니다."] : r )),
    title: "조식",
  }, {
    data: await fetch(`http://localhost:3000/openApi/api/mealData/2/${year *10000 + month *100+ date}`, {
      cache: "no-store",
      method: "GET",
    }).then((r) => r.json()).then((r)=>( r.error ? ["급식 정보가 없습니다."] : r )),
    title: "중식",
  }, {
    data: await fetch(`http://localhost:3000/openApi/api/mealData/3/${year *10000 + month *100+ date}`, {
      cache: "no-store",
      method: "GET",
    }).then((r) => r.json()).then((r)=>( r.error ? ["급식 정보가 없습니다."] : r )),
  title: "석식",
  }, ];
console.log(data);
  return (
<<<<<<< Updated upstream
      <div className="flex justify-between w-full">
        {data && data.map((ai, i) => (
          <CafeMenuPane data={ai.data} title={ai.title} key={i} />
        ))}
=======
    <div className="flex flex-col justify-center w-full">
      <div className="flex justify-center items-stretch mb-[90px]">
        <div
          className="mx-16 flex justify-center"
          onClick={() => setSelect((select + datalen - 1) % datalen)}>
          <ChevronLeft className="text-yellow-400 h-full cursor-pointer" width={71} height={71} />
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
>>>>>>> Stashed changes
      </div>
  );
};

export default CafeMenu;
