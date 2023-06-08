"use client";

type Props = {
  text: "Unfollow" | "Follow";
  red: boolean;
  onclick: () => void;
};

export default function Button({ text, red, onclick }: Props) {
  console.log(red);
  return (
    <button
      className={`text-white px-2 py-[0.2rem] rounded-2xl ${
        red ? "bg-red-400" : "bg-blue-400"
      }`}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
