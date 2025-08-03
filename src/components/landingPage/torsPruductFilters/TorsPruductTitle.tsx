import { type JSX } from "react";
import { LuSettings2 } from "react-icons/lu";
import { CategoryMenu } from "./index";
import { HeaderBoxTitle, SeeMoreBtn } from "../../ui";

export const TitleMenu = ({
  handleCategory,
}: {
  handleCategory: (category: string) => void;
}): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-8">
        <HeaderBoxTitle>پرفروش ترین تور ها 💣</HeaderBoxTitle>
        <CategoryMenu handleCategory={handleCategory} />
      </div>
      <div className="flex  items-center gap-8">
        <button className="text-2xl max-lg:hidden cursor-pointer" type="button">
          <LuSettings2 />
        </button>
        <SeeMoreBtn />
      </div>
    </div>
  );
};
