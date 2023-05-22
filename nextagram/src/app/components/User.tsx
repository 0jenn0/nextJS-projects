"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

// async 쓰니까 data 무한으로 불러옴
export default function User() {
  const { data, status } = useSession();

  if (data?.user) {
    return (
      <Link href={`/user/${data.user.email}}`}>
        <Image
          className="rounded-full"
          src={data.user.image ?? ""}
          alt="Profile Img"
          width={30}
          height={30}
        />
        {/* <p>{data?.user?.name}</p> */}
      </Link>
    );
  } else return <></>;
}
