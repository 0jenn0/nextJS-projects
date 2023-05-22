"use client";
import DragDrop from "../components/DragDrop.jsx";
import SendButton from "../components/SendButton";

export default function NewPage() {
  return (
    <section>
      <DragDrop />
      <textarea placeholder="Write a caption ..." />
      <SendButton />
    </section>
  );
}
