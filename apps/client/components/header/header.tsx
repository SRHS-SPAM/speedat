"use client";

import { Settings, UserRound, Moon } from "lucide-react";
//루시드-여러가지 모양의 아이콘 지원하는 라이브러리
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface HeaderInputProps {
  isDark: boolean;
  isLog: boolean;
}

const Header = ({ isDark, isLog }: HeaderInputProps) => {
  const [isLogIn, setIsLogIn] = useState(false); //로그인 여부 확인용
  const NavList = [
    <UserRound key={1} size={28} />,
    <Moon key={2} size={28} />,
    <Settings key={3} />,
  ];

  return (
    <>
      <div
        className={`fixed top-0 w-full min-w-[433px] h-[79px] px-[35px] py-2 dark:bg-zinc-900 ${isDark ? "bg-zinc-900" : "bg-white"} justify-between items-center inline-flex z-[9999] border-b border-gray-400`}>
        <Link href="/">
          <Image
            src="/speedat.svg"
            alt="Speedat Logo"
            className="dark:invert cursor-pointer"
            width={158}
            height={63}
            priority
          />
        </Link>
        {isLogIn || isLog ? (
          <div className="flex items-center gap-6">
            {NavList.map((arg, i) => (
              <div
                className={`w-[36px] h-[36px] flex items-center justify-center dark:text-white ${isDark ? "text-white" : "text-zinc-900"} cursor-pointer rounded shadow`}
                key={i}>
                {arg}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <div className="h-[32px] w-[119px] bg-[#FFB700] rounded items-center flex justify-center cursor-pointer">
              <div className="text-zinc-900 text-xs font-bold">로그인 하기</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
{
  /* {isLogIn ? ( //로그인 여부에 따른 아이콘 이미지 변경용
            <UserRound color={iconColor} className="w-9 h-9 relative cursor-pointer"></UserRound>
          ) : (
            <LogIn color={iconColor} className="white w-9 h-9 relative cursor-pointer" />
          )} */
}
