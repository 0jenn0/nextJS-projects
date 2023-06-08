"use client";

import { HomeUser, AuthUser } from "@/model/user";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import ScrollableBar from "./ui/ScrollableBar";

type Props = {
  user: AuthUser;
};

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<HomeUser>("/api/me");
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
