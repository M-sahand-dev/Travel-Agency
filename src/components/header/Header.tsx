import type { JSX } from "react";
import { Title, Menu, BagBtn, UserBtnPanel, ToggleBtn } from "./index";

export const Header = (): JSX.Element => {
  return (
    <header className="w-full px-4 py-2 border-b-1 border-solid  border-gray-quaternary ">
      <div className="container mx-auto flex items-center justify-between">
        <div className=" flex items-center gap-8">
          {/* title logo component */}
          <Title />
          {/* menu component */}
          <Menu />
        </div>
        {/* cart button & userPanel */}
        <div className="lg:flex hidden items-center gap-4 ">
          {/* bag button */}
          <BagBtn />
          {/* user button  */}
          <UserBtnPanel />
        </div>
        <ToggleBtn />
      </div>
    </header>
  );
};
