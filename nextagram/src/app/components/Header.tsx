import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import GoogleButton from "./GoogleButton";
import User from "./User";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between px-3 py-1">
      <h1>Nextagram</h1>

      <nav className="flex gap-2 items-center">
        <Link href={"/"}>
          <AiOutlineHome />
        </Link>

        <Link href={"/new"}>
          <AiOutlinePlusSquare />
        </Link>

        <Link href={"/search"}>
          <AiOutlineSearch />
        </Link>

        <User />

        <GoogleButton />
      </nav>
    </header>
  );
}
