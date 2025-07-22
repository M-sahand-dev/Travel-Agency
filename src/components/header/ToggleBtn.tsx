import type { JSX } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const ToggleBtn = ({
  onClick,
  isMenuOpen,
}: {
  onClick: () => void;
  isMenuOpen: boolean;
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className=" lg:hidden block text-2xl  hover:text-gray-400 transition-colors duration-300">
      {!isMenuOpen ? <GiHamburgerMenu /> : <IoMdClose />}
    </button>
  );
};
