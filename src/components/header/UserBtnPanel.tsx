import type { JSX } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

export const UserBtnPanel = (): JSX.Element => {
  return (
    <Link
      to={"/login"}
      className="user-btn-panel cursor-pointer  flex  items-center gap-2 py-3 px-8 border dark:border-white border-gray-quaternary rounded-5xl ">
      <AiOutlineUser className="text-2xl font-bold" />
      <button className=" font-medium ">حساب کاربری</button>
    </Link>
  );
};
