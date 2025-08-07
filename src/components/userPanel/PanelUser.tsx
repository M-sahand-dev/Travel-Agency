import { type JSX } from "react";
import { DashboardMenu, PannerItem } from "../index";

export const PanelUser = (): JSX.Element => {
  return (
    <section className="relative flex lg:items-start lg:gap-x-8 lg:p-9 max-w-[1440px] mx-auto">
      <DashboardMenu />
      <PannerItem />
    </section>
  );
};
