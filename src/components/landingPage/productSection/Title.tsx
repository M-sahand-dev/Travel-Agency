import { type JSX } from "react";
import { HeaderBoxTitle } from "../../ui/HeaderBoxTitle";
import { SeeMoreBtn } from "../../ui";

export const Title = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <HeaderBoxTitle>محبوب ترین مکان ها 🗼</HeaderBoxTitle>
      <SeeMoreBtn />
    </div>
  );
};
