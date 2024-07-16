"use client"

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation"

export default function PrevButton() {
    const router = useRouter();
    return (
        <div className="w-[7.5rem] h-[7.5rem] p-6 flex justify-center items-center absolute cursor-pointer" onClick={()=>router.back()}>
          <ChevronLeft className="w-[100%] h-[100%] text-white" />
        </div>
    )
}