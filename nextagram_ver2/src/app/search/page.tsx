"use client";

import UserListCard from "@/components/UserListCard";
import GridSpinner from "@/components/ui/GridSpinner";
import { UserBySearch } from "@/model/user";
import { useState } from "react";
import useSWR from "swr";

type InputValue = {
  tempt: string;
  keyword: string;
};

export default function page() {
  const [inputValue, setInputValue] = useState<InputValue>({
    tempt: "",
    keyword: "",
  });
  const {
    data,
    isLoading: loading,
    error,
  } = useSWR(`/api/search/${inputValue.keyword}`);

  if (loading)
    return (
      <div className="w-full flex justify-center mt-8">
        <GridSpinner />
      </div>
    );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setInputValue((prev) => ({ ...prev, keyword: prev.tempt }));
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // inputValue = e.target.value;
    setInputValue((prev) => ({ ...prev, tempt: e.target.value }));
  };

  return (
    <section className="w-1/2 flex flex-col gap-3 items-center">
      <form action="submit" onSubmit={handleSubmit} className="w-full">
        <input
          value={inputValue.tempt}
          type="text"
          placeholder="Search for a username or name"
          className="w-full outline-none border border-neutral-200 rounded-full px-6 py-3"
          onChange={(e) => handleChange(e)}
        />
      </form>
      <ul className="flex flex-col gap-3 w-5/6">
        {data.length === 0 && (
          <p className="text-center text-xl text-neutral-400">
            찾는 사용자가 없습니다.
          </p>
        )}

        {data.me && <UserListCard user={data.me} />}

        {data.other
          ? data.other.map((user: UserBySearch) => (
              <li key={user.username}>
                <UserListCard user={user} />
              </li>
            ))
          : data.map((user: UserBySearch) => (
              <li key={user.username}>
                <UserListCard user={user} />
              </li>
            ))}
      </ul>
    </section>
  );
}
