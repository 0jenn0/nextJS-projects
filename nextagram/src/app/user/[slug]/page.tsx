import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWR from "swr";
import { client } from "@/lib/sanity";
import groq from "groq";
import FollowButton from "@/app/components/FollowButton";
import UserHeader from "@/app/components/UserHeader";
import { isFollow } from "../../../../sanity/sanity-utils";

type Props = {
  params: {
    slug: string;
  };
};

export default async function UserPage({ params }: Props) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <UserHeader email={params.slug} />
    </>
  );
}
