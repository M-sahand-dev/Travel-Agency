import { type JSX } from "react";
import { tourProductCategory } from "../../constants";
import { NavLink, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const CategoryMenuMobileItem = ({
  handleCategory,
}: {
  handleCategory: (value: string) => void;
}): JSX.Element => {
  const location = useLocation();
  const id = uuidv4();
  return (
    <div className="hidden max-lg:flex w-full items-center gap-6 text-dark-secondary dark:text--white-quinary-2 *:cursor-pointer text-xl max-sm:text-3xs">
      {tourProductCategory.map((item) => (
        <NavLink
          key={id + item.id}
          to={`/allproduct/${item.id}${location.search}`}
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
