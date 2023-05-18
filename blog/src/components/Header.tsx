"use client";

import Link from "next/link";

const nav_menu = ["home", "about", "posts", "contact"];

export default function Header() {
  return (
    <header className="flex width-full justify-between p-3 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
      <Link href="/">
        <span className="text-xl font-semibold transition ease-in-out duration-200 hover:text-rose-300">{`Jenn's Blog`}</span>
      </Link>

      <nav>
        {nav_menu.map((menu, index) => (
          <Link
            key={index}
            className="p-2 text-sm hover:font-semibold hover:border-b-2 hover:border-white transition ease-in-out duration-200"
            href={menu === "home" ? "/" : `/${menu}`}
          >
            {menu}
          </Link>
        ))}
      </nav>
    </header>
  );
}
