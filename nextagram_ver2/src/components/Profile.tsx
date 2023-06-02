"use client";

import { useSession } from "next-auth/react";
import Avatar from "./Avatar";

export default function Profile() {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <section className="flex flex-col gap-4 w-1/4 p-6">
      <article className="flex gap-8">
        <Avatar image={user?.image} border={false} size="large" />
        <div>
          <p className="font-semibold text-base">{user?.username}</p>
          <p className="text-base text-gray-500">{user?.name}</p>
        </div>
      </article>
      <p className="text-sm text-gray-400">
        About Help Press API Jobs Privacy Terms Location Language
      </p>
      <p className="font-semibold text-gray-500 text-sm">
        @Copyright NEXTAGRAM from METAL
      </p>
    </section>
  );
}
