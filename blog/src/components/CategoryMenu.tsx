"use client";

type Props = {
  categories: string[];
  onClick: Function;
};
export default function CategoryMenu({ categories, onClick }: Props) {
  return (
    <menu className="flex justify-start items-center mt-20 text-xs mb-10 md:text-base">
      {/* <h1>Category</h1> */}
      {categories.map((category, index) => (
        <button
          key={index}
          className="m-1 trasition ease-in-out duration-200 hover:border-2 border-rose-200 rounded-full px-3 py-1"
          onClick={() => onClick(category)}
        >
          {category}
        </button>
      ))}
    </menu>
  );
}
