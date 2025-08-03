import { type JSX } from "react";
import { Link } from "react-router-dom";

export const SeeMoreBtn = (): JSX.Element => {
  return (
    <Link
      to={"/"}
      className="py-4 px-8 bg-gray-quinary dark:bg-dark-secondary rounded-4xl">
      دیدن همه
    </Link>
  );
};
