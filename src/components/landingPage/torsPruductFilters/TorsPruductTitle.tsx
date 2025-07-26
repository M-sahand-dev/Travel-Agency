import { type JSX } from "react";
import { LuSettings2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CategoryMenu } from "./index";

export const TitleMenu = ({
  handleCategory,
}: {
  handleCategory: (category: string) => void;
}): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-8">
        <h1 className="font-bold text-lg max-lg:text-md max-sm:text-base font-Rokh">
          پرفروش ترین تور ها 💣
          <div className="absolute h-[3px] w-[45px] bg-blue-primary"></div>
        </h1>
        <CategoryMenu handleCategory={handleCategory} />
      </div>
      <div className="flex  items-center gap-8">
        <button className="text-2xl max-lg:hidden cursor-pointer" type="button">
          <LuSettings2 />
        </button>
        <Link
          to={"/"}
          className="py-4 px-8 bg-gray-quinary dark:bg-dark-secondary rounded-4xl">
          دیدن همه
        </Link>
      </div>
    </div>
  );
};
