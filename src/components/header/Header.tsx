import type { JSX } from "react";
import { Title, Menu, BagBtn, UserBtnPanel } from "./index";

export const Header = (): JSX.Element => {
  return (
    <header className="w-full px-4 py-2 border-b-1 border-solid  border-gray-quaternary ">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* title logo component */}
            <Title />
            {/* menu component */}
            <Menu />
          </div>
          {/* cart button & userPanel */}
          <div className="flex items-center gap-4">
            {/* bag button */}
            <BagBtn />
            {/* user button  */}
            <UserBtnPanel />
          </div>
        </div>
      </div>
    </header>
  );
};
