"use client";
import { useState } from "react";
import Image from "next/image";
const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); //다크모드 관리용
  return (
    <div className="w-full h-[80px] bg-white dark:bg-black">
      <div className=" relative flex flex-col">
        <div className=" justify-between w-[100px] flex absolute left-1/2 my-[3px] mx-[-50px]">
          <Image
            src={isDarkMode ? "/githubDark.svg" : "/github.png"} //isDarkMode에 따라서 이미지 변경
            alt="git"
            className="cursor-pointer" //마우스 올렸을 시 클릭 모양 만들기
            width={30}
            height={30}
            priority
          />
          <div className="text-black mt-[5px] dark:text-white">|</div>
          <Image
            src={isDarkMode ? "/instaDark.svg" : "/insta.png"}
            alt="insta"
            className="cursor-pointer"
            width={30}
            height={30}
            priority
          />
        </div>
        <div className="text-black w-[1000px] text-center font-normal line absolute left-1/2 my-[40px] mx-[-500px] dark:text-white">
          rogo.wiki | msg2324@srh-spam.com | SPAM | PROJECT ROGOWIKI{" "}
        </div>
      </div>
    </div>
  );
};
export default Footer;
