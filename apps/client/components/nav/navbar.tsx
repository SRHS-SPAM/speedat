import { Bell, Menu, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavList = [<Bell key={1} size={28} />, <UserRound key={2} size={28} />, <Menu key={3} />];

const Navbar = () => {
  return (
    <div className="z-50 fixed flex justify-between w-full border-b shadow-sm top-0 px-6 py-2 h-20 bg-white">
      <Link href="/">
        <Image src={"/images/logo.png"} height={60} width={200} alt="Logo" />
      </Link>
      <div className="flex items-center gap-6">
        {NavList.map((arg, i) => (
          <div className="w-14 h-14 flex items-center justify-center" key={i}>
            {arg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
