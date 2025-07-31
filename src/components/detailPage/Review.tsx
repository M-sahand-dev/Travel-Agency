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
              className={({ isActive }) => (isActive ? "active-link" : "")}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
