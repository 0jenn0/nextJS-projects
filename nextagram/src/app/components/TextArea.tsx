"use client";

export default function TextArea({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) {
  return (
    <textarea
      placeholder="Write a caption ..."
      name="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
