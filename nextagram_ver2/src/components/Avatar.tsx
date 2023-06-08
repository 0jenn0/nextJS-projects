type AvatarSize = "xlarge" | "large" | "small" | "medium";

type Props = {
  image?: string | null;
  highlight?: boolean;
  size?: AvatarSize;
};

export default function Avatar({
  image,
  highlight = true,
  size = "small",
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      <img
        className={`bg-white rounded-full p-[0.1rem] object-cover + ${getImageSizeStyle(
          size
        )}`}
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

const getContainerSize = (size: AvatarSize) => {
  switch (size) {
    case "small":
      return "w-9 h-9";
    case "medium":
      return "w-11 h-11";
    case "large":
      return "w-[68px] h-[68px]";
    case "xlarge":
      return "w-[142px] h-[142px]";
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
};

const getContainerStyle = (size: AvatarSize, highlight: boolean): string => {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = getContainerSize(size);

  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
};

const getImageSizeStyle = (size: AvatarSize): string => {
  switch (size) {
    case "small":
      return "w-[34px] h-[34px] p-[0.1rem]";
    case "medium":
      return "w-[42px] h-[42px] p-[0.1rem]";
    case "large":
      return "w-16 h-16 p-[0.2rem]";
    case "xlarge":
      return "w-[138px] h-[138px] p-[0.3rem]";
    default:
      throw new Error(`Unsupported type size: ${size}`);
  }
};
