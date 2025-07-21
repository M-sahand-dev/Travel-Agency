import type { JSX } from "react";
import { AiOutlineUser } from "react-icons/ai";

export const UserBtnPanel = (): JSX.Element => {
  return (
    <div className="user-btn-panel flex items-center gap-2 py-3 px-8 border border-gray-quaternary rounded-5xl ">
      <AiOutlineUser className="text-2xl font-bold" />
      <button className=" font-medium">حساب کاربری</button>
    </div>
  );
};
