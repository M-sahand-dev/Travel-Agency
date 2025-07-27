import { type JSX, useEffect, useState } from "react";
import {
  Title,
  Menu,
  BagBtn,
  UserBtnPanel,
  ToggleBtn,
  MenuResponsive,
  Shape,
  DarkMode,
} from "./index";

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const savedTheme = () => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  };

  useEffect(() => {
    savedTheme();
  }, []);

  const handleDarkModeToggle = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("theme", newDarkModeState ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkModeState);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="w-full fixed right-0 bg-white-primary dark:bg-dark-primary z-[1000000]  py-2 border-b-1 border-solid dark:border-white-secondary border-gray-quaternary ">
      <div className="container relative mx-auto flex items-center justify-between">
        <div className=" flex items-center gap-8">
          {/* title logo component */}
          <Title />
          {/* menu component */}
          <Menu />
        </div>
        {/* cart button & userPanel */}
        <div className="lg:flex hidden items-center gap-4 ">
          {/* dark mode button */}
          <DarkMode
            toggleDarkMode={isDarkMode}
            onClick={handleDarkModeToggle}
          />
          {/* bag button */}
          <BagBtn />
          {/* user button  */}
          <UserBtnPanel />
        </div>

        <ToggleBtn isMenuOpen={isMenuOpen} onClick={toggleMenu} />
        <MenuResponsive
          isDarkMode={isDarkMode}
          handleDarkModeToggle={handleDarkModeToggle}
          isMenuOpen={isMenuOpen}
        />
      </div>
      {/* shape component */}
      <Shape onClick={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};
