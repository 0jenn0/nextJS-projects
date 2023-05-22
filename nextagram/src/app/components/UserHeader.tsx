"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWR from "swr";
import { client } from "@/lib/sanity";
import groq from "groq";
import FollowButton from "@/app/components/FollowButton";
import { isFollow } from "../../../sanity/sanity-utils";
import { useEffect, useState } from "react";

export default function UserHeader({ email }: { email: string }) {
  // param.slug = email
  // id = mail앞부분
  const id = email.split("%40")[0];
  const {
    data: user,
    error,
    isLoading,
  } = useSWR(
    groq`*[_type == "userCustom"][email=="${id}@gmail.com"]`,
    (query) => client.fetch(query)
  );
  const [isFollowState, setIsFollowState] = useState<boolean>();

  const mailToFollow = id + "@gmail.com";
  const { data } = useSession();
  const mailOfUser: string = data?.user?.email!;
  console.log("userheader!!!", mailOfUser, mailToFollow);

  if (isLoading === true) return <h1>Loading ...</h1>;
  return (
    <section className="flex gap-4 border-b border-gray-200">
      <Image
        className="rounded-full"
        src={user[0].image}
        alt="Profile Img"
        width={100}
        height={100}
      />
      <article className="flex flex-col gap-4">
        <div className="flex gap-4">
          <p>{user[0].email}</p>
          {/* <button>팔로우</button> */}

          <FollowButton mailOfUser={mailOfUser} mailToFollow={mailToFollow} />
        </div>
        <div className="flex gap-4">
          <p>게시물</p>
          <p>팔로워</p>
          <p>팔로우</p>
        </div>
      </article>
    </section>
  );
}
