import Avatar from "./Avatar";

type Props = {
  userImage: string;
  username: string;
};

export default function PostUserAvatar({ userImage, username }: Props) {
  return (
    <div className="w-100 flex gap-3 items-center p-2 border-b border-neutral-200">
      <Avatar image={userImage} size="medium" />
      <p className="font-semibold">{username}</p>
    </div>
  );
}
