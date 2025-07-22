import type { JSX } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import type { DarkModeProps } from "../../types";

export const DarkMode = ({
  onClick,
  toggleDarkMode,
}: DarkModeProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="p-4 rounded-full border-2 border-dark-primary dark:border-white-primary"
      aria-label="Toggle dark mode">
      {!toggleDarkMode ? (
        <FaRegMoon className="text-gray-600 dark:text-gray-300" />
      ) : (
        <MdOutlineWbSunny className="text-white" />
      )}
    </button>
  );
};
