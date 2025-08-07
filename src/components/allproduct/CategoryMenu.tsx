import { type JSX } from "react";
import { tourProductCategory } from "../../constants";
import { NavLink } from "react-router-dom";

export const CategoryMenu = ({
  handleCategory,
}: {
  handleCategory: (value: string) => void;
}): JSX.Element => {
  return (
    <div className="flex max-lg:hidden items-center gap-8 text-dark-secondary dark:text--white-quinary-2 *:cursor-pointer text-2xl max-lg:gap-6 max-lg:text-xl max-sm:text-3xs">
      {tourProductCategory.map((item) => (
        <NavLink
          key={item.id}
          to={item.title}
          className={({ isActive }) =>
            isActive
              ? "max-lg:p-0 p-1 border-b max-lg:border-0 border-dark-secondary font-bold max-lg:font-normal dark:border-white-quinary-2 text-dark-secondary dark:text-white-quinary-2"
              : ""
          }
          onClick={() => handleCategory(item.title)}>
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};
