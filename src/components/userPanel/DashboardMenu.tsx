import { useId, type JSX } from "react";
import { IoSettingsOutline, IoExitOutline } from "react-icons/io5";
import { dashbordMenu } from "../../constants";

export const DashboardMenu = (): JSX.Element => {
  const id = useId();
  return (
    <div className="-right-65 sm:-right-70  fixed !h-[calc(100vh-64px)] lg:h-screen  z-50 md:static lg:sticky lg:top-5 overflow-y-auto w-65 sm:w-70 md:w-66 lg:w-70 shrink-0 bg-dark-glass-contrast-3 md:border-l md:border-l-black-10 px-7 py-5 lg:rounded-lg max-md:transition-all max-md:duration-300">
      <div className="">
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-dark-glass-contrast-2">
          <div className="flex items-center gap-x-3">
            <img
              src="/public/image/ad2fccd6f19d4f77fe6308520136edbc166eb172.png"
              alt="name"
              className="w-11 h-11 rounded-full"
            />
            <div className="">
              <h3 className=" font-medium ">زهرا</h3>
              <p className="font-regular font-Rokh text-gary-primary">
                0900000000
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-x-3">
            <button type="button" className=" text-xl hover:text-gray-700">
              <IoSettingsOutline />
            </button>
            <button type="button" className=" text-xl hover:text-red-primary">
              <IoExitOutline />
            </button>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-y-3 *:cursor-pointer">
            {dashbordMenu.map((item) => (
              <li key={id + item.id} className="flex gap-4">
                <div className=""></div>
                <div className="flex gap-4 hover:text-blue-primary items-center">
                  <item.icon />
                  <span>{item.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
