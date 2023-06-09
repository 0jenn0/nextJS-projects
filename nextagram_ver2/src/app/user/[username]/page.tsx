import UserProfile from "@/components/UserProfile";
import UserPosts from "@/components/UserPosts";
import { getUserForProfile } from "@/service/user";

type Props = {
  params: {
    username: string;
  };
};

export default async function page({ params: { username } }: Props) {
  const user = await getUserForProfile(username);

  return (
    <section className="w-full flex flex-col items-center gap-5">
      {<UserProfile user={user} />}
      {<UserPosts user={user} />}
    </section>
  );
}
