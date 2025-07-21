import type { JSX } from "react";
import { HiShoppingBag } from "react-icons/hi2";

export const BagBtn = (): JSX.Element => {
  return (
    <button className="p-4 rounded-full text-white bg-blue-primary border border-blue-tertiary text-md hover:bg-blue-secondary transition-colors duration-300">
      <HiShoppingBag />
    </button>
  );
};
