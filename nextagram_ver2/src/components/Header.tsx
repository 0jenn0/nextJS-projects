"use client";

import Link from "next/link";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import SignButton from "./SignButton";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full  border border-gray-200 flex justify-between items-center py-2 px-4">
      <h1 className="text-2xl font-semibold">Nextagram</h1>
      <nav className="text-2xl flex gap-4 items-center">
        <Link href={"/"}>
          {pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}
        </Link>
        <Link href={"/search"}>
          {pathname === "/search" ? <RiSearchFill /> : <RiSearchLine />}
        </Link>
        <Link href={"/new"}>
          {pathname === "/new" ? <BsPlusSquareFill /> : <BsPlusSquare />}
        </Link>
        <SignButton />
      </nav>
    </header>
  );
}
