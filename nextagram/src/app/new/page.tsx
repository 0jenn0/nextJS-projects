"use client";
import { useState } from "react";
import DragDrop from "../components/DragDrop.jsx";
import SendButton from "../components/SendButton";
import { useSession } from "next-auth/react";
import TextArea from "../components/TextArea";

export default function NewPage() {
  const [text, setText] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  // const { data } = useSession();

  // const email = data!.user!.email;

  return (
    <section>
      <DragDrop imgUrl={imgUrl} setImgUrl={setImgUrl} />
      <TextArea setText={setText} text={text} />
      <SendButton text={text} imgUrl={imgUrl} />
    </section>
  );
}
