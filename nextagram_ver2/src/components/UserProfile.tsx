import { ProfileUser } from "@/model/user";
import FollowButton from "./FollowButton";
import Avatar from "./Avatar";

type Props = {
  user: ProfileUser;
};

export default function UserProfile({ user }: Props) {
  const { image, username, name, followers, following, posts } = user;
  const info = [
    { title: "posts", data: posts },
    { title: "followers", data: followers },
    { title: "following", data: following },
  ];
  return (
    <section className="w-full flex gap-10 pb-8 pt-3 justify-center items-center">
      <Avatar image={image} size="xlarge" highlight={true} />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-lg">{username}</p>
          <FollowButton user={user} />
        </div>
        <ul className="flex gap-2">
          {info.map(({ data, title }, index) => (
            <li key={index} className="text-neutral-600">
              <span className="font-semibold">{data}</span> {title}
            </li>
          ))}
        </ul>
        <p className="text-lg">{name}</p>
      </div>
    </section>
  );
}
