"use client";

import { DetailUser, User } from "@/model/user";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import Link from "next/link";
import ScrollableBar from "./ui/ScrollableBar";
import Carousel from "react-multi-carousel";
import { SwiperSlide } from "swiper/react";

type Props = {
  user: User;
};

export default function FollowingBar({ user: { username } }: Props) {
  const { data, isLoading: loading, error } = useSWR<DetailUser>("/api/me");
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ul className="w-full relative">
          <ScrollableBar users={users} />
        </ul>
      )}
    </section>
  );
}
