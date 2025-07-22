import type { JSX } from "react";
import type { ShapeProps } from "../../types";

export const Shape = ({ isMenuOpen, onClick }: ShapeProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={`${!isMenuOpen ? "hidden" : "block"} lg:hidden block z-0 fixed top-0 left-0 w-full h-full bg-dark-glass-contrast  opacity-50`}></div>
  );
};
