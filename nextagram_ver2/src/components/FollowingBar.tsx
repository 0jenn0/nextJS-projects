"use client";

import { DetailUser, User } from "@/model/user";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import Link from "next/link";

type Props = {
  user: User;
};

export default function FollowingBar({ user: { username } }: Props) {
  const { data, isLoading: loading, error } = useSWR<DetailUser>("/api/me");
  const users = data?.following;
  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto">
      {loading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ul className="w-full flex gap-2">
          {users.map(({ username, image }) => (
            <li key={username}>
              <Link
                href={`/user/${username}`}
                className="flex flex-col items-center justify-center w-20"
              >
                <Avatar image={image} highlight size="large" />
                <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                  {username}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
