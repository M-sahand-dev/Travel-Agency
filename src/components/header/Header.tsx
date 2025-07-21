import type { JSX } from "react";
import { Title } from "./index";

export const Header = (): JSX.Element => {
  return (
    <header className="w-full px-4 py-2 border-b-1 border-solid  border-gray-quaternary ">
      <div className="">
        <div className="">
          {/* title logo component */}
          <Title />
        </div>
      </div>
    </header>
  );
};
