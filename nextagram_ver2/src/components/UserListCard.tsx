import { UserBySearch } from "@/model/user";

type Props = {
  user: any;
};
export default function UserListCard({ user }: Props) {
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.following ? user.following : 0}</p>
    </div>
  );
}
