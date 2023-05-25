"use client";

import { useState } from "react";
import DragDrop from "../components/DragDrop.jsx";
import SendButton from "../components/SendButton";
import { useSession } from "next-auth/react";
import TextArea from "../components/TextArea";

export default function PostArea() {
  const [text, setText] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  return (
    <div>
      <DragDrop imgUrl={imgUrl} setImgUrl={setImgUrl} />
      <TextArea setText={setText} text={text} />
      <SendButton text={text} imgUrl={imgUrl} />
    </div>
  );
}
