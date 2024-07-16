"use client";
import speedat from "@/public/images/publicImg/speedat.svg";
import { ChevronLeft, Eye, EyeOff, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleKeepLoggedIn = () => {
    setKeepLoggedIn((prevKeepLoggedIn) => !prevKeepLoggedIn);
  };

  const handleLogin = () => {
    console.log("로그인 시도:", { email, password, keepLoggedIn });
  };

  return (
    <>
      <div className="h-[100vh] bg-yellow-500">
        <div className="w-[7.5rem] h-[7.5rem] p-6 flex justify-center items-center absolute">
          <ChevronLeft className="w-[100%] h-[100%] text-white" />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center md:items-end">
          <div className="w-[28.75rem] h-[37.5rem] bg-white m-[30px] md:m-[145px] rounded-[10px] flex justify-center items-center">
            <div className="w-[25rem] h-[27.375rem] flex flex-col items-center justify-between">
              <Image src={speedat} width={165} height={60} alt="speedat 로고" />
              <div className="w-full h-[10.75rem] flex flex-col justify-between">
                <div className="w-full h-[8.5rem] flex flex-col justify-between">
                  <div className="w-full h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center">
                    <input
                      className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[16px]"
                      type="text"
                      placeholder="이메일을 입력하세요"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="w-full h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center relative">
                    <input
                      className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[16px]"
                      type={showPassword ? "text" : "password"}
                      placeholder="비밀번호를 입력하세요"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <button
                      type="button"
                      className="absolute right-[2.0625rem] top-1/2 transform -translate-y-1/2"
                      onClick={togglePasswordVisibility}>
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div className="w-full h-[24px] gap-[8px] flex items-center">
                  <div className="flex items-center cursor-pointer" onClick={toggleKeepLoggedIn}>
                    <Circle
                      className={`w-[24px] h-full ${keepLoggedIn ? "text-yellow-500" : "text-gray-500"}`}
                      size={20}
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ fill: keepLoggedIn ? "#FFD700" : "none" }}
                    />
                  </div>
                  <div className="w-[368px] h-[19px] flex items-end">
                    <span className="w-[262px] h-auto not-italic leading-[120%] text-[16px] font-pretendard">
                      로그인 유지
                    </span>
                    <span className="w-auto h-[14px] not-italic leading-[120%] text-[12px] font-pretendard underline">
                      임시 비밀번호 발급
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[400px] p-[12px] bg-yellow-400 hover:bg-yellow-500 border-darkgray rounded-[10px] flex justify-center items-center">
                <button
                  className="w-full h-full text-center font-bold text-[20px] text-white text-[#1A1A1D]"
                  onClick={handleLogin}>
                  로그인
                </button>
              </div>
              <div className="w-auto h-auto rounded-[10px] gap-[16px] flex justify-center items-center">
                <label className="text-center text-[12px] font-bold leading-[120%]">
                  계정이 없으신가요?
                </label>
                <label className="text-center text-[12px] underline text-yellow-400 cursor-pointer font-bold leading-[120%]">
                  <Link href={"/signup"}>회원가입</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
