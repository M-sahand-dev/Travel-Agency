import { type JSX } from "react";
import { DashboardMenu, PannerItem } from "../index";
import { darkBlueTheme } from "../../constants";

export const PanelUser = (): JSX.Element => {
  return (
    <section
      className="relative w-full h-full flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1540px] "
      style={{ backgroundColor: darkBlueTheme.colors.background.default }}>
      <DashboardMenu />
      <PannerItem />
    </section>
  );
};
