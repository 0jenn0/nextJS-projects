type Props = {
  image?: string | null;
  border?: boolean;
  size?: "large" | "small";
};

export default function Avatar({
  image,
  border = true,
  size = "small",
}: Props) {
  const borderStyle =
    " rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 flex items-center";
  const style = " rounded-full p-[0.1rem]";

  if (border)
    return (
      <div
        className={borderStyle + (size === "small" ? "w-9 h-9" : "w-12 h-12")}
      >
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
      className={style + (size === "small" ? "w-9 h-9" : "w-12 h-12")}
      alt="user profile"
      src={image ?? undefined}
      referrerPolicy="no-referrer"
    />
  );
}
