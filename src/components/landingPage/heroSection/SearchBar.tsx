import { type JSX } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";

export const SearchBar = (): JSX.Element => {
  return (
    <div className="absolute border border-dark-secondary bg-white dark:bg-dark-quinary dark:border-white-quaternary p-8 rounded-6xl z-50 left-32 right-32 bottom-[-4rem]">
      <div className=" relative  flex items-center gap-8 justify-between *:flex *:gap-2 *:items-center *:cursor-pointer">
        <div className="">
          <CiLocationOn className="" />

          <p>
            <span>*</span>
            مقصد خود را انتخاب کنید
          </p>
          <IoIosArrowDown className="inline-block" />
        </div>
        <div className="">
          <BsCalendarDate className="" />
          <p>تاریخ ورود</p>
          <IoIosArrowDown className="inline-block" />
        </div>
        <div className="">
          <BsCalendarDate className="" />
          <p>تاریخ خروج</p>
          <IoIosArrowDown className="inline-block" />
        </div>
        <div className="">
          <LuUserRound className="" />
          <p>تعداد </p>
          <IoIosArrowDown className="inline-block" />
        </div>
        <button
          type="button"
          className="py-3.5 px-14 bg-blue-primary rounded-5xl">
          جستجو
        </button>
      </div>
    </div>
  );
};
