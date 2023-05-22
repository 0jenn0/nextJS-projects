import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import GoogleButton from "./GoogleButton";
import User from "./User";
import Link from "next/link";

export default function Header() {
  const buttonStyle = "text-2xl";
  return (
    <header className="flex justify-between px-3 py-2 border-b border-gray-200">
      <h1 className="text-lg font-semibold">Nextagram</h1>

      <nav className="flex gap-2 items-center">
        <Link href={"/"}>
          <AiOutlineHome className={buttonStyle} />
        </Link>

        <Link href={"/new"}>
          <AiOutlinePlusSquare className={buttonStyle} />
        </Link>

        <Link href={"/search"}>
          <AiOutlineSearch className={buttonStyle} />
        </Link>

        <User />

        <GoogleButton />
      </nav>
    </header>
  );
}
