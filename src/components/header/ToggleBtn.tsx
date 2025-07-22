import type { JSX } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import type { ToggleBtnProps } from "../../types";

export const ToggleBtn = ({
  onClick,
  isMenuOpen,
}: ToggleBtnProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className=" lg:hidden block text-2xl  hover:text-gray-400 transition-colors duration-300">
      {!isMenuOpen ? <GiHamburgerMenu /> : <IoMdClose />}
    </button>
  );
};
