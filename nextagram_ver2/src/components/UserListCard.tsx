import { UserBySearch } from "@/model/user";
import Avatar from "./Avatar";
import Link from "next/link";

type Props = {
  user: UserBySearch;
};
export default function UserListCard({ user }: Props) {
  return (
    <Link
      href={`/user/${user.username}`}
      className="flex gap-3 border border-neutral-200 p-3 w-full"
    >
      <Avatar image={user.image} size="large" highlight={false} />
      <div>
        <p className="font-semibold">{user.username}</p>
        <p className="text-neutral-500">{user.name}</p>
        <div></div>
        <div className="flex gap-2 text-neutral-500">
          <p>{`${user.followers ? user.followers : 0} follower`}</p>
          <p>{`${user.following ? user.following : 0} following`}</p>
        </div>
      </div>
    </Link>
  );
}
