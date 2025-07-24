import { type JSX } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export const LoremProduct = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center p-8">
      <Link
        to={`/`}
        className="p-4 bg-gray-quinary-2 dark:bg-dark-secondary rounded-full">
        <FaChevronDown />
      </Link>
    </div>
  );
};
