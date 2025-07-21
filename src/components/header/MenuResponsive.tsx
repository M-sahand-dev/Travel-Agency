import type { JSX } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const MenuResponsive = (): JSX.Element => {
  return (
    <div className="LandingPage">
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
