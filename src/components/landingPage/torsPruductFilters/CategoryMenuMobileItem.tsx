import { type JSX } from "react";
import { tourProductCategory } from "../../../constants";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const CategoryMenuMobileItem = ({
  handleCategory,
}: {
  handleCategory: (value: string) => void;
}): JSX.Element => {
  const id = uuidv4();
  return (
    <div className="flex items-center gap-6 text-dark-secondary dark:text--white-quinary-2 *:cursor-pointer text-xl max-sm:text-3xs">
      {tourProductCategory.map((item) => (
        <NavLink
          key={id + item.id}
          to={item.title}
          className={({ isActive }) =>
            isActive ? "   text-dark-secondary dark:text-white-quinary-2" : ""
          }
          onClick={() => handleCategory(item.title)}>
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};
