import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jenn's Blog 🤍",
  description: "젠 블로그 😝 created by Next JS",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative w-screen h-screen">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
