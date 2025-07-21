import type { JSX } from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

export const Menu = (): JSX.Element => {
  return (
    <div className="flex items-center gap-6 *:hover:text-blue-tertiary">
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
      <Link to="/" className="text-2xl">
        <RiSearch2Line />
      </Link>
    </div>
  );
};
