import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import GoogleButton from "./GoogleButton";
import User from "./User";
import { createClient } from "next-sanity";

export default function Header() {
  return (
    <header className="flex justify-between px-3 py-1">
      <h1>Nextagram</h1>
      <nav className="flex gap-2 items-center">
        <AiOutlineHome />
        <AiOutlineSearch />
        <AiOutlinePlusSquare />
        <User />
        <GoogleButton />
      </nav>
    </header>
  );
}
