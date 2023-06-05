"use client";

import UserListCard from "@/components/UserListCard";
import { UserBySearch } from "@/model/user";
import useSWR from "swr";

export default function page() {
  const { data, isLoading: loading, error } = useSWR("/api/search");

  if (loading) return <p className="font-3xl">Laoding</p>;

  return (
    <section className="w-1/2 mt-3">
      <form action="submit"></form>
      <ul className="flex flex-col gap-3">
        <UserListCard user={data.me} />
        {data.other.map((user: UserBySearch) => (
          <li key={user.username}>
            <UserListCard user={user} />
          </li>
        ))}
      </ul>
    </section>
  );
}
