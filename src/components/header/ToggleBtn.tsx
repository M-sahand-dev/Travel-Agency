import type { JSX } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const ToggleBtn = (): JSX.Element => {
  return (
    <button className=" lg:hidden block text-2xl  hover:text-gray-400 transition-colors duration-300">
      <GiHamburgerMenu />
    </button>
  );
};
