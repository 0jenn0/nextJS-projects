import { VscSmiley } from "react-icons/vsc";

export default function CommentForm() {
  return (
    <form
      action="submit"
      className="w-full flex items-center border-t border-neutral-200"
    >
      <VscSmiley className="w-[3rem] aspect-square text-2xl" />
      <input
        type="text"
        placeholder="Add a comment ... "
        className="grow px-3 py-2 text-sm outline-none"
      />
      <button className="font-semibold px-2 text-blue-500">Post</button>
    </form>
  );
}
