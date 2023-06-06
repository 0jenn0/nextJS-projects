"use client";

import UserListCard from "@/components/UserListCard";
import GridSpinner from "@/components/ui/GridSpinner";
import { UserBySearch } from "@/model/user";
import { useState } from "react";
import useSWR from "swr";
import useDebounce from "@/app/hooks/useDebounce";

export default function UserSearch() {
  const [keyword, setKeyword] = useState<string>("");
  const debouncedKeyword = useDebounce(keyword, 500);

  const {
    data,
    isLoading: loading,
    error,
  } = useSWR(`/api/search/${debouncedKeyword}`);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <section className="w-1/2 flex flex-col gap-3 items-center">
      <form action="submit" onSubmit={handleSubmit} className="w-full">
        <input
          value={keyword}
          type="text"
          placeholder="Search for a username or name"
          className="w-full outline-none border border-neutral-200 rounded-full px-6 py-3"
          onChange={(e) => handleChange(e)}
          autoFocus
        />
      </form>
      {loading && (
        <div className="w-full flex justify-center mt-8">
          <GridSpinner />
        </div>
      )}
      <ul className="flex flex-col gap-3 w-5/6">
        {data && data.length && data.length === 0 && (
          <p className="text-center text-xl text-neutral-400">
            찾는 사용자가 없습니다.
          </p>
        )}

        {data && data.me && <UserListCard user={data.me} />}

        {data &&
          data.other &&
          data.other.map((user: UserBySearch) => (
            <li key={user.username}>
              <UserListCard user={user} />
            </li>
          ))}
        {data &&
          !data.other &&
          data.map((user: UserBySearch) => (
            <li key={user.username}>
              <UserListCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
