import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jenn's Blog 🤍",
  description: "젠 블로그 😝 created by Nex JS",
};

const nav_menu = ["home", "about", "posts", "contact"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative w-screen h-screen">
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

        <div>{children}</div>

        <footer className="text-slate-700 bg-sky-100 text-sm text-center p-4 mt-7 bottom-0">
          <span>{`Don't forget to CODE your dream | Alright reserved`}</span>
        </footer>
      </body>
    </html>
  );
}
