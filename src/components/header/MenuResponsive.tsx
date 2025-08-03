import type { JSX } from "react";
import { IoIosArrowDown } from "react-icons/io";
// import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BagBtn, Title, UserBtnPanel, DarkModeMobile } from "./index";
import type { MenuResponsiveProps } from "../../types";

export const MenuResponsive = ({
  isMenuOpen,
  isDarkMode,
  handleDarkModeToggle,
}: MenuResponsiveProps): JSX.Element => {
  return (
    <div
      className={`z-[60] fixed top-[-1rem] ${!isMenuOpen ? "right-[-24rem]" : "right-[-1rem]"} dark:bg-dark-primary bg-white-primary h-screen p-8 lg:hidden flex flex-col gap-8 dark:shadow-tertiary shadow-primary `}>
      <div className="flex gap-16 items-center justify-between">
        <Title />
      </div>
      <div className="flex gap-16 items-center">
        <UserBtnPanel />
        <BagBtn />
      </div>

      <div className="flex flex-col gap-4 *:hover:text-blue-tertiary">
        <Link to="/">هتل</Link>
        <Link className="flex gap-2 items-center" to="/">
          تور داخلی
          <div className=""></div>
          <IoIosArrowDown className="inline-block" />
        </Link>
        <Link className="flex gap-2 items-center" to="/c/">
          تور خارجی
          <div className=""></div>
          <IoIosArrowDown className="inline-block" />
        </Link>
        <Link to="/">بیمه مسافرتی</Link>
        <Link to="/">سفرنامه</Link>
      </div>
      <div className="border-t-2 border-gray-quaternary pt-4">
        {/* dark mode button */}
        <DarkModeMobile
          isDarkMode={isDarkMode}
          onClick={handleDarkModeToggle}
        />
      </div>
    </div>
  );
};
