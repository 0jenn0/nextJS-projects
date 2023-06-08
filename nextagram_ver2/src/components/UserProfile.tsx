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
    <section className="flex gap-3">
      <Avatar image={image} size="large" />
      <div>
        <div className="flex gap-2">
          <p>{username}</p>
          <FollowButton user={user} />
        </div>
        <ul className="flex gap-2">
          {info.map((item, index) => (
            <li key={index}>
              <span>{item.data}</span> {item.title}
            </li>
          ))}
        </ul>
        <p>{name}</p>
      </div>
    </section>
  );
}
