type Props = {
  text: string;
  onClick: () => void;
  size: "big" | "small";
};

export default function ColorButton({ text, onClick, size = "small" }: Props) {
  return (
    <div
      className={`rounded-xl bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 flex items-center
    ${size === "big" ? "p-[0.3rem]" : "p-[0.2rem]"}
    `}
    >
      <button
        className={`bg-white border-2 border-transparent rounded-lg text-base  hover:bg-rose-50 
        ${size === "big" ? "p-3 text-2xl" : "px-[0.2rem] text-sm"}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
