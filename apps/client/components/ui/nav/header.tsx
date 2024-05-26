"use client";
import { useState } from "react";
import { Bell, LogIn, Settings, User } from "lucide-react";
import Image from "next/image";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
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
          {isLogIn ? (
            <User
              color={isDarkMode ? "#FFF" : "#000"}
              className="w-9 h-9 relative cursor-pointer"></User>
          ) : (
            <LogIn
              color={isDarkMode ? "#FFF" : "#000"}
              className="white w-9 h-9 relative cursor-pointer"
            />
          )}
          <Bell
            color={isDarkMode ? "#FFF" : "#000"}
            className="w-9 h-9 relative cursor-pointer"></Bell>
          <Settings
            color={isDarkMode ? "#FFF" : "#000"}
            className="w-9 h-9 relative cursor-pointer"></Settings>
        </div>
      </div>
    </>
  );
};
export default Header;
