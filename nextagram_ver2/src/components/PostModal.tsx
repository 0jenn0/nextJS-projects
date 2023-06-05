import CloseIcon from "./ui/icons/CloseIcon";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function PostModal({ children, onClose }: Props) {
  const buttonHoverStyle = "bg-black rounded-full bg-opacity-40";
  return (
    <section
      className="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full z-50 flex flex-col justify-center items-center"
      onClick={(event) => {
        if (event?.target === event?.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        onClick={() => onClose()}
        className={`fixed top-0 right-0 p-2 m-3 text-white hover:${buttonHoverStyle}`}
      >
        <CloseIcon />
      </button>
      {children}
    </section>
  );
}
