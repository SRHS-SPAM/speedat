"use client";
import { PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-auto flex justify-center">
      <div className="w-full h-auto mx-[89.5px] mt-[1.5rem] grid gap-16">
        <div className="w-full h-[308px] px-[50.5px] py-[32px] shadow-[0_2px_4px_0_rgba(0,0,0,0.3)]">
          <div className="w-full h-full grid gap-[24px]">
            <div className="w-full h-[100px] flex items-center">
              <div className="w-[146px] h-full flex items-center">
                <div className="w-[100px] h-[100px] bg-neutral-600 rounded-full"></div>
              </div>
              <div className="w-full h-auto text-2xl flex flex-col">
                <samp className="">
                  <samp className="text-2xl font-bold font-['Pretendard'] leading-[28.80px]">
                    김스팸
                  </samp>
                  님
                </samp>
                <samp className="text-2xl">
                  <samp className="text-2xl font-bold font-['Pretendard'] leading-[28.80px]">
                    3
                  </samp>
                  학년
                  <samp className="text-2xl font-bold font-['Pretendard'] leading-[28.80px]">
                    12
                  </samp>
                  반
                  <samp className="text-2xl font-bold font-['Pretendard'] leading-[28.80px]">
                    395
                  </samp>
                  번
                </samp>
              </div>
              <PenTool className="w-[32px] h-[32px]" />
            </div>
            <div className="w-full h-[120px] px-8 pt-6 pb-3 rounded border border-gray-700 justify-start items-start gap-1 inline-flex">
              <input
                className="w-full h-fullborder-none rounded focus:outline-none"
                type="text"
                placeholder="내용을 입력하세요"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[260px] grid gap-[32px]">
          <div className="w-full h-[42px] grid gap-[12px]">
            <samp className="text-zinc-900 text-2xl font-medium font-['Pretendard'] leading-[28.80px]">
              내 기록
            </samp>
            <div className="w-full h-px bg-gray-400"></div>
          </div>
          <div className="w-full h-[186px] shadow-[0_2px_4px_0_rgba(0,0,0,0.3)]">
            <div className="w-auto h-[90px] m-[48px] grid gap-[32px]">
              <div className="w-full h-[29px] flex">
                <div className="w-full h-[29px] flex justify-center">
                  <samp className="text-2xl font-medium font-['Pretendard']">총 조회 수</samp>
                </div>
                <div className="w-full h-[29px] flex justify-center">
                  <samp className="text-2xl font-medium font-['Pretendard']">총 좋아요 수</samp>
                </div>
                <div className="w-full h-[29px] flex justify-center">
                  <samp className="text-2xl font-medium font-['Pretendard']">총 글 수</samp>
                </div>
              </div>
              <div className="w-full h-[29px] flex">
                <div className="w-full h-[29px] flex justify-center">
                  <samp className="text-2xl font-medium font-['Pretendard']">회</samp>
                </div>
                <div className="w-full h-[29px] flex justify-center">
                  <samp className="text-2xl font-medium font-['Pretendard']">개</samp>
                </div>
                <div className="w-full h-[29px] flex justify-center">
                  <samp className="text-2xl font-medium font-['Pretendard']">개</samp>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[742px] border-2">
          <div className="w-full h-[42px] grid gap-[12px]">
            <samp className="text-zinc-900 text-2xl font-medium font-['Pretendard'] leading-[28.80px]">
              내 글
            </samp>
            <div className="w-full h-px bg-gray-400"></div>
          </div>
        </div>
        <div className="w-full h-[32px] border-2"></div>
      </div>
    </div>
  );
}
