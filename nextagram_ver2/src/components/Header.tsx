"use client";

import Link from "next/link";
import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import { usePathname } from "next/navigation";
import ColorButton from "./ColorButton";

const menu = [
  { href: "/", icon: HomeIcon(), clickedIcon: HomeFillIcon() },
  { href: "/search", icon: SearchIcon(), clickedIcon: SearchFillIcon() },
  { href: "new", icon: NewIcon(), clickedIcon: NewFillIcon() },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full  border-b border-gray-200 flex justify-between items-center py-2 px-4">
      <h1 className="text-2xl font-semibold">Nextagram</h1>
      <nav className="text-2xl flex gap-4 items-center">
        <ul className="flex gap-3">
          {menu.map(({ href, icon, clickedIcon }) => (
            <li key={href}>
              <Link href={href}>{pathname !== href ? icon : clickedIcon}</Link>
            </li>
          ))}
        </ul>
        <ColorButton text={"Sign in "} onClick={() => {}} />
      </nav>
    </header>
  );
}
