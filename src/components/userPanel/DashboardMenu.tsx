import { useId, type JSX } from "react";
import { IoSettingsOutline, IoExitOutline } from "react-icons/io5";
import { dashbordMenu, darkBlueTheme } from "../../constants";

export const DashboardMenu = (): JSX.Element => {
  const id = useId();

  return (
    <div
      className="fixed !h-[calc(100vh-64px)] lg:h-screen max-md:-right-[40rem] z-50 md:static lg:sticky lg:top-5 overflow-y-auto w-65 sm:w-70 md:w-66 lg:w-70 shrink-0 px-7 py-5 lg:rounded-lg max-md:transition-all max-md:duration-300 "
      style={{
        backgroundColor: darkBlueTheme.colors.background.paper,
        borderLeft: `1px solid ${darkBlueTheme.colors.border.default}`,
        boxShadow: darkBlueTheme.shadows.medium,
      }}>
      <div className="">
        <div
          className="flex items-center justify-between pb-5 mb-5"
          style={{
            borderBottom: `1px solid ${darkBlueTheme.colors.border.default}`,
          }}>
          <div className="flex items-center gap-x-3">
            <img
              src="/image/ad2fccd6f19d4f77fe6308520136edbc166eb172.png"
              alt="name"
              className="w-11 h-11 rounded-full"
              style={{
                border: `2px solid ${darkBlueTheme.colors.primary.light}`,
              }}
            />
            <div className="">
              <h3 style={{ color: darkBlueTheme.colors.text.contrast }}>
                زهرا
              </h3>
              <p style={{ color: darkBlueTheme.colors.text.secondary }}>
                0900000000
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <button
              type="button"
              style={{ color: darkBlueTheme.colors.text.secondary }}
              className="hover:text-blue-400 transition-colors">
              <IoSettingsOutline />
            </button>
            <button
              type="button"
              style={{ color: darkBlueTheme.colors.text.secondary }}
              className="hover:text-red-400 transition-colors">
              <IoExitOutline />
            </button>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-y-1 *:cursor-pointer">
            {dashbordMenu.map((item) => (
              <li
                key={id + item.id}
                className="py-2 px-3 rounded-lg transition-colors hover:bg-opacity-50 hover:bg-action-hover">
                <div
                  className="flex gap-4 items-center transition-colors"
                  style={{ color: darkBlueTheme.colors.text.primary }}>
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
