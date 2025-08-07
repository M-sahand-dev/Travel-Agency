import { type JSX } from "react";
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { MdOutlineWbSunny } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export const PannerItem = (): JSX.Element => {
  return (
    <section className="flex flex-col lg:gap-y-8 w-full overflow-hidden">
      <header className="flex items-center justify-between bg-dark-glass-contrast-3 shrink-0 w-full h-22 px-5 sm:px-7  max-lg:border-b max-lg:border-b-light lg:rounded-lg lg:dark:darker-gradient">
        <button className="md:!hidden  btn-icon-area text-2xl">
          <RxDashboard />
        </button>
        <div className="relative z-60 hidden md:flex items-center justify-between gap-x-4 w-72 xl:w-85  bg-dark-secondary rounded-lg py-1 px-4 h-12">
          <input
            type="search"
            placeholder="سفر های من , تیکت های من , مالی ..."
            className="size-full text-label placeholder:text-muted placeholder:text-3xs outline-hidden"
          />
          <CiSearch className="text-xl font-black" />
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex gap-x-3">
            <button className=" btn-icon-area text-2xl">
              <GrCart />
            </button>
            <button className="  btn-icon-area text-2xl">
              <MdOutlineWbSunny />
            </button>
          </div>
          <div className="max-lg:hidden w-px h-6 bg-dark-secondary"></div>
          {/* time */}
          <div className="max-lg:hidden text-3xs select-none">
            جمعه ۱۷ مرداد
          </div>
        </div>
      </header>
    </section>
  );
};
