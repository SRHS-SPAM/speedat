"use client";
import { useState } from "react";
import { Bell, LogIn, Settings, User } from "lucide-react"; //루시드-여러가지 모양의 아이콘 지원하는 라이브러리
import Image from "next/image";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); //다크모드 관리용
  const [isLogIn, setIsLogIn] = useState(false); //로그인 여부 확인용
  const iconColor = isDarkMode ? "#FFF" : "#000"; //다크모드에 따른 배경색 변경용
  return (
    <>
      <div className="fixed top-0 w-full min-w-[433px] h-[79px] px-[35px] py-2 dark:bg-black bg-white justify-between items-center inline-flex z-[9999]">
        <Image
          src="/speedat.svg"
          alt="Speedat Logo"
          className="dark:invert cursor-pointer"
          width={158}
          height={63}
          priority
        />
        <div className="justify-start items-start gap-12 flex">
          {isLogIn ? ( //로그인 여부에 따른 아이콘 이미지 변경용
            <User color={iconColor} className="w-9 h-9 relative cursor-pointer"></User>
          ) : (
            <LogIn color={iconColor} className="white w-9 h-9 relative cursor-pointer" />
          )}
          <Bell color={iconColor} className="w-9 h-9 relative cursor-pointer"></Bell>
          <Settings color={iconColor} className="w-9 h-9 relative cursor-pointer"></Settings>
        </div>
      </div>
    </>
  );
};
export default Header;
