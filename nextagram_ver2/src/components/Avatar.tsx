type Props = {
  image?: string | null;
  border: boolean;
};

export default function Avatar({ image, border }: Props) {
  if (border)
    return (
      <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 flex items-center">
        <img
          className="rounded-full p-[0.1rem]"
          alt="user profile"
          src={image ?? undefined}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  return (
    <img
      className="rounded-full p-[0.1rem]"
      alt="user profile"
      src={image ?? undefined}
      referrerPolicy="no-referrer"
    />
  );
}
