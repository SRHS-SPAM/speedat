// "use client";

// import Image from "next/image";
// import { useState } from "react";
// export interface FooterInputProps {
//   isDark?: boolean;
// }
// const Footer = ({ isDark = false }: FooterInputProps) => {
//   const [isDarkMode, setIsDarkMode] = useState(false); //다크모드 관리용
//   return (
//     <div
//       className={`w-full h-[80px] ${isDark ? "bg-zinc-900" : "bg-white"} dark:bg-zinc-900 relative`}>
//       <div className=" relative flex flex-col">
//         <div className=" justify-between w-[100px] flex absolute left-1/2 my-[3px] mx-[-50px]">
//           <Image
//             src={isDarkMode || isDark ? "githubDark.svg" : "/github.png"} //isDarkMode에 따라서 이미지 변경
//             alt="git"
//             className="cursor-pointer" //마우스 올렸을 시 클릭 모양 만들기
//             width={30}
//             height={30}
//             priority
//           />
//           {isDarkMode || isDark ? (
//             <div className="w-[5.12px] h-[30px] relative bg-white rounded-sm"></div>
//           ) : (
//             <div className="w-[5.12px] h-[30px] relative bg-zinc-900 rounded-sm"></div>
//           )}
//           <Image
//             src={isDarkMode || isDark ? "/instaDark.svg" : "/insta.png"}
//             alt="insta"
//             className="cursor-pointer"
//             width={30}
//             height={30}
//             priority
//           />
//         </div>
//         <div
//           className={`${isDark ? "text-white" : "text-zinc-900"} w-[1000px] text-center font-normal line absolute left-1/2 my-[40px] mx-[-500px] dark:text-white`}>
//           rogo.wiki | msg2324@srh-spam.com | SPAM | PROJECT ROGOWIKI{" "}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Footer;
