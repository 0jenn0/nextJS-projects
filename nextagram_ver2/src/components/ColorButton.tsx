type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-1">
      <button
        className="bg-white m-auto border-2 border-transparent rounded-full text-base px-2 py-1 hover:bg-rose-50"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
