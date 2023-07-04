import { categories } from "../utils/const";

export default function Sidebar({ selectedCategory, toggleCategory }) {
  function handleClick() {
    console.log(e);
  }
  return (
    <aside className="flex gap-x-4 gap-y-2 overflow-x-auto py-2 md:flex-col">
      {categories.map((cate) => {
        return (
          <div
            key={cate.title}
            className={`flex cursor-pointer items-center gap-2 rounded-xl p-2 opacity-80 hover:bg-gray-300 dark:text-white dark:hover:bg-red-500 ${
              cate.title === selectedCategory &&
              "bg-gray-300 opacity-100 dark:bg-red-600"
            }`}
            onClick={() => toggleCategory(cate.title)}
          >
            {cate.icon}
            <p className="whitespace-nowrap">{cate.title}</p>
          </div>
        );
      })}
    </aside>
  );
}
