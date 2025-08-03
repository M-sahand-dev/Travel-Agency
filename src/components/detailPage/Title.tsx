import { type JSX } from "react";
import { HeaderBoxTitle, SeeMoreBtn } from "../ui";

export const Title = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <HeaderBoxTitle>تور های مشابه</HeaderBoxTitle>
      <SeeMoreBtn />
    </div>
  );
};
