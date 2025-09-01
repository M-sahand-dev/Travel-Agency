import { useState, type JSX } from "react";
import type { NavReview } from "../../types";
import { NavLink, useParams } from "react-router-dom";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

export const ReviewMenuResponsiv = ({
  navReview,
}: {
  navReview: NavReview[];
}): JSX.Element => {
  const { id } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hidden flex-col gap-4  max-sm:flex relative py-4">
      <div className="text-2xl py-4 *:cursor-pointer hover:shadow-2xl w-6 h-6">
        <button onClick={handleToggleMenu} type="button" className="">
          <TfiLayoutMenuSeparated />
        </button>
      </div>
      <nav
        className={` ${!isMenuOpen ? "hidden" : "flex"} absolute bg-white dark:bg-dark-quinary-5 top-16 w-full rounded-2xl  flex-col gap-4 items-center`}>
        {navReview.map((item: NavReview) => (
          <NavLink
            key={item.id}
            to={item.to.replace(":id", id || "")}
            className={({ isActive }) =>
              isActive
                ? `border-b-2   border-b-blue-primary p-4 font-bold text-blue-primary  transition duration-200 ease-in-out`
                : `p-4  hover:text-gary-primary transition duration-200 ease-in-out`
            }>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
