"use client";

type Props = {
  categories: string[];
  onClick: Function;
};
export default function CategoryMenu({ categories, onClick }: Props) {
  return (
    <menu className="flex flex-col justify-start items-center mt-20 ml-20">
      <h1 className="text-2xl m-2">Category</h1>
      {categories.map((category, index) => (
        <button
          key={index}
          className="text-lg m-2"
          onClick={() => onClick(category)}
        >
          {category}
        </button>
      ))}
    </menu>
  );
}
