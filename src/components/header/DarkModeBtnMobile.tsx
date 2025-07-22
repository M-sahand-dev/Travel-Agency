import type { JSX } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export const DarkModeMobile = ({
  onClick,
  isDarkMode,
}: {
  onClick: () => void;
  isDarkMode: boolean;
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="*:flex *:gap-2 *:items-center"
      aria-label="Toggle dark mode">
      {!isDarkMode ? (
        <span>
          <FaRegMoon className="text-gray-600 dark:text-gray-300" />
          تم تیره
        </span>
      ) : (
        <span>
          <MdOutlineWbSunny className="text-white" />
          تم روشن
        </span>
      )}
    </button>
  );
};
