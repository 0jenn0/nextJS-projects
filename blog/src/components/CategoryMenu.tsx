"use client";

type Props = {
  categories: string[];
  onClick: Function;
};
export default function CategoryMenu({ categories, onClick }: Props) {
  return (
    <menu className="flex flex-col justify-start items-center mt-20 ml-20">
      <h1 className="text-xl m-2 font-semibold border-b-2 border-spacing-5 text-gray-500">
        Category
      </h1>
      {categories.map((category, index) => (
        <button
          key={index}
          className="text-lg m-2 trasition ease-in-out duration-200 hover:bg-rose-200 rounded-full px-3 py-1"
          onClick={() => onClick(category)}
        >
          {category}
        </button>
      ))}
    </menu>
  );
}
