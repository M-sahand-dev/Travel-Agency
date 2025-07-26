import { type JSX } from "react";
import { CategoryMenuMobileItem } from "./index";
import { LuSettings2 } from "react-icons/lu";

export const CategoryMenuMobile = ({
  handleCategory,
}: {
  handleCategory: (category: string) => void;
}): JSX.Element => {
  return (
    <div className="hidden max-lg:flex justify-between items-center m-4">
      <CategoryMenuMobileItem handleCategory={handleCategory} />
      <button className="text-2xl  cursor-pointer" type="button">
        <LuSettings2 />
      </button>
    </div>
  );
};
