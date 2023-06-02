import { User } from "@/model/user";
import Avatar from "./Avatar";

type Props = {
  user: User;
};

export default function Sidebar({ user: { name, username, image } }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <article className="flex gap-8">
        <Avatar image={image} highlight={false} size="large" />
        <div>
          <p className="font-semibold text-base">{username}</p>
          <p className="text-base text-gray-500">{name}</p>
        </div>
      </article>
      <p className="text-sm text-gray-400">
        About · Help · Press · API · Jobs · Privacy · Terms · Location ·
        Language
      </p>
      <p className="font-semibold text-gray-500 text-sm">
        @Copyright NEXTAGRAM from METAL
      </p>
    </section>
  );
}
