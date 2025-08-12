import { type JSX, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";
import { tourProductData } from "../../../constants/data";
import { Link } from "react-router-dom";
import type { TourProduct } from "../../../types";

export const SearchBar = (): JSX.Element => {
  const id = uuidv4();
  const [toggleShape, setToggleShape] = useState(false);
  const [selectPlace, setSelectPlace] = useState<string>("");

  const handleToggle = () => {
    setToggleShape(!toggleShape);
  };

  return (
    <div className="hidden lg:block absolute border border-dark-secondary bg-white dark:bg-dark-quinary dark:border-white-quaternary p-8 rounded-6xl z-50 left-24 right-24  max-xl:left-16 max-xl:right-16 bottom-4">
      <div className="max-xl:text-base relative  flex items-center gap-8 justify-between *:flex *:gap-2 *:items-center *:cursor-pointer text-xl">
        <div className="" onClick={handleToggle}>
          <CiLocationOn className="" />

          <p>
            {selectPlace ? (
              selectPlace
            ) : (
              <>
                <span className="text-red-primary">*</span>
                مقصد خود را انتخاب کنید
              </>
            )}
          </p>
          <IoIosArrowDown
            className={`inline-block ${!toggleShape ? "rotate-180" : "rotate-0"}`}
          />
          <div
            className={`${!toggleShape ? "opacity-0 -translate-y-4 h-0 overflow-hidden" : "opacity-100 translate-y-0 h-auto"} 
    absolute top-16 right-4 w-48 border dark:border-white-secondary border-dark-glass-contrast 
    bg-white dark:bg-dark-primary p-4 rounded-2xl 
    transition-all duration-300 ease-in-out`}>
            <ul className="flex flex-col gap-2 *:hover:bg-gray-200 dark:*:hover:bg-gray-950">
              {tourProductData.map((city: TourProduct, index: number) => (
                <button
                  type="button"
                  id={id + index}
                  key={id + index}
                  onClick={() => {
                    setSelectPlace(city.title);
                    setToggleShape(false);
                  }}
                  className="w-full px-4 py-2 *:cursor-pointer rounded-2xl">
                  <button className="">{city.title}</button>
                </button>
              ))}
            </ul>
          </div>
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
        <Link
          to={"/"}
          type="button"
          className="py-3.5 px-14 bg-blue-primary rounded-5xl text-white">
          جستجو
        </Link>
      </div>
    </div>
  );
};
