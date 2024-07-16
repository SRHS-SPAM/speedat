"use client";
import speedat from "@/public/images/publicImg/speedat.svg";
import { ChevronLeft, Eye, EyeOff, Square } from "lucide-react";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";

const Checkbox = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => {
  return (
    <div onClick={onChange} className="cursor-pointer">
      <Square
        className={`mr-2 ${checked ? "text-yellow-500" : "text-gray-500"}`}
        size={20}
        style={{ fill: checked ? "#FFD700" : "none" }}
      />
    </div>
  );
};

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleGradeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGrade(e.target.value);
  };

  const handleClassRoomChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClassRoom(e.target.value);
  };

  const handleClassNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClassNumber(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleAgreementChange = () => {
    setAgreementChecked((prevChecked) => !prevChecked);
  };

  const handleSignUp = () => {
    // 회원가입 로직 추가
    console.log("회원가입 시도:", { email, password, name, grade, classRoom, classNumber });
  };

  const handleLogin = () => {
    // 로그인 로직 추가
    console.log("로그인 시도:", { email, password });
  };

  //sm: md: lg: xl:
  return (
    <>
      <div className="h-[100vh] bg-yellow-500 relative flex">
        <div className="w-[7.5rem] h-[7.5rem] p-6 justify-center items-center absolute hidden md:flex ">
          <ChevronLeft className="w-[100%] h-[100%] text-white" />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center md:items-end">
          <div className="w-[28.75rem] h-[42.5625rem] px-[30px] py-[26px] bg-white m-[30px] md:m-[145px] rounded-[10px] flex flex-col justify-between items-center">
            <div className="flex justify-center">
              <Image src={speedat} width={165} height={60} alt="speedat 로고" />
            </div>
            <div className="w-auto h-[34.0625rem] flex flex-col gap-[24px]">
              <div className="w-auto h-auto flex flex-col items-center gap-[16px]">
                <div className="w-full h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center">
                  <input
                    className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[16px]"
                    type="text"
                    placeholder="이름을 입력하세요"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="w-full h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center">
                  <input
                    className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[16px]"
                    type="text"
                    placeholder="이메일을 입력하세요"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="w-full h-[64px] gap-[16px] flex justify-between">
                  <div className="w-full h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center">
                    <input
                      className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[16px]"
                      type="text"
                      placeholder="학년"
                      value={grade}
                      onChange={handleGradeChange}
                    />
                  </div>
                  <div className="w-full h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center">
                    <input
                      className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[16px]"
                      type="text"
                      placeholder="반"
                      value={classRoom}
                      onChange={handleClassRoomChange}
                    />
                  </div>
                  <div className="w-full h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center">
                    <input
                      className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[16px]"
                      type="text"
                      placeholder="번호"
                      value={classNumber}
                      onChange={handleClassNumberChange}
                    />
                  </div>
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
                <div className="w-full h-[64px] border-[2px] border-gray-300 rounded-[10px] flex items-center relative">
                  <input
                    className="w-full h-full pl-6 rounded-[10px] placeholder-opacity-50 text-[16px]"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="비밀번호를 다시 입력하세요"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <button
                    type="button"
                    className="absolute right-[2.0625rem] top-1/2 transform -translate-y-1/2"
                    onClick={togglePasswordVisibility}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className="w-auto h-auto flex flex-col gap-[27px]">
                <div className="w-auto h-auto gap-[12px] text-[13px] flex">
                  <div className="w-[1rem] h-[1rem]">
                    <Checkbox checked={agreementChecked} onChange={handleAgreementChange} />
                  </div>
                  <span className="text-[12px]">
                    <Link href={"#"} className="underline bold font-bold">
                      개인정보수집이용안내
                    </Link>{" "}
                    및{" "}
                    <Link href={"#"} className="underline bold font-bold">
                      약관
                    </Link>{" "}
                    에 동의합니다.
                  </span>
                </div>
                <div className="flex flex-col gap-[32px]">
                  <div className="w-[400px] p-[12px] bg-yellow-400 hover:bg-yellow-500 border-darkgray rounded-[10px] flex justify-center items-center">
                    <button
                      className="leading-[120%] text-center font-bold text-[20px] text-white text-[#1A1A1D]"
                      onClick={handleSignUp}
                      disabled={!agreementChecked}>
                      회원가입
                    </button>
                  </div>
                  <div className="w-auto h-auto rounded-[10px] gap-[16px] flex justify-center items-center">
                    <label className="leading-[120%] text-center text-[12px] font-bold">
                      계정이 이미 있으신가요?
                    </label>
                    <label className="leading-[120%] relative left-[10px] text-center text-[12px] underline text-yellow-400 cursor-pointer underline font-bold">
                      <Link href={"/login"}>로그인</Link>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
