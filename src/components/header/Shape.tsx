import type { JSX } from "react";

export const Shape = ({
  isMenuOpen,
  onClick,
}: {
  isMenuOpen: boolean;
  onClick: () => void;
}): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={`${!isMenuOpen ? "hidden" : "block"} lg:hidden block z-0 fixed top-0 left-0 w-full h-full bg-dark-glass-contrast  opacity-50`}></div>
  );
};
