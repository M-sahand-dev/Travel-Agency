import { type JSX } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { navReview, tourProductData } from "../../constants";

export const Review = (): JSX.Element => {
  const { id } = useParams();
  const currentTour = tourProductData.find((tour) => tour.id === Number(id));

  if (!currentTour) {
    return <div>تور یافت نشد</div>;
  }
  return (
    <div className="">
      <div>
        <nav className="flex gap-4 items-center">
          {navReview.map((item) => (
            <NavLink
              key={item.id}
              to={item.to.replace(":id", id || "")}
              className={({ isActive }) =>
                isActive
                  ? "  border-b-2 border-b-blue-primary p-4 font-bold text-blue-primary  transition duration-200 ease-in-out"
                  : "p-4 hover:text-gary-primary transition duration-200 ease-in-out"
              }>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
