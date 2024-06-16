import { ChevronLeft, ChevronRight } from "lucide-react";
import { CafeMenuPaneProps } from "../page";
import CafeMenuPane from "./cafeMenuPane";
import { useState, useRef, useEffect } from "react";

const CafeMenu = async () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth()+1);
  const date = 18;

  const data = [{
    data: await fetch(`http://localhost:3000/openApi/api/mealData/0/${year *10000 + month *100+ date}`, {
      cache: "no-store",
      method: "GET",
    }).then((r) => r.json()).then((r)=>( r.error ? ["급식 정보가 없습니다."] : r )),
    title: "조식",
  }, {
    data: await fetch(`http://localhost:3000/openApi/api/mealData/1/${year *10000 + month *100+ date}`, {
      cache: "no-store",
      method: "GET",
    }).then((r) => r.json()).then((r)=>( r.error ? ["급식 정보가 없습니다."] : r )),
    title: "중식",
  }, {
    data: await fetch(`http://localhost:3000/openApi/api/mealData/2/${year *10000 + month *100+ date}`, {
      cache: "no-store",
      method: "GET",
    }).then((r) => r.json()).then((r)=>( r.error ? ["급식 정보가 없습니다."] : r )),
  title: "석식",
  }, ];
console.log(data);
  return (
      <div className="flex justify-between w-full">
        {data && data.map((ai, i) => (
          <CafeMenuPane data={ai.data} title={ai.title} key={i} />
        ))}
      </div>
  );
};

export default CafeMenu;
