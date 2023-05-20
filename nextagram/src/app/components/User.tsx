"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function User() {
  const { data, status } = useSession();
  console.log("data", data);
  if (data?.user) {
    return (
      <>
        <Image
          className="rounded-full"
          src={data.user.image ?? ""}
          alt="Profile Img"
          width={30}
          height={30}
        />
        <p>{data?.user?.name}</p>
      </>
    );
  } else return <></>;
}
