
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CafeMenuAllPaneProps {
    date: number;
    mon: "pre"|"cur"|"nxt";
    menu: number
}
const CafeMenuAllPane = ({date, mon, menu}:CafeMenuAllPaneProps) => {
    console.log(menu)
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth()+(mon=="pre"?0:mon=="cur"?1:2))%12;
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fe = async () => {
            const data = await fetch(`http://localhost:3000/openApi/api/mealData/${menu}/${year *10000 + month *100+ date}`, {
                cache: "no-store",
                method: "GET",
            }).then((r) => r.json()).then((r)=>( r.error ? ["급식 정보가 없습니다."] : r ))
            setData(data);
        }
        fe();
    }, [menu])
    return (<div className={cn("text-[10px] text-neutral-400 bg-neutral-100 font-semibold px-[15px] pt-[10px] pb-[11px] h-[183px] flex flex-col justify-between", mon == "cur" && "bg-white text-neutral-900", (mon == "cur" && date == currentDate.getDate()) && "bg-yellow-200")}>
        <span className="mb-2 text-sm">{date}</span>
        <div className="flex-1 flex flex-col items-center">
            <div className="flex flex-col justify-around h-full">
            {
                data.map((ai, i)=> (
                    <p key={i} className="">
                        {ai}
                    </p>
                ))
            }
            </div>
        </div>
    </div>)
}

export default CafeMenuAllPane;