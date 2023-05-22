"use client";
import DragDrop from "../components/DragDrop.jsx";

export default function NewPage() {
  return (
    <section>
      <DragDrop />
      <textarea placeholder="Write a caption ..." />
    </section>
  );
}
