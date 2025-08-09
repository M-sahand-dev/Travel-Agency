import { type JSX } from "react";

export const TItlePanelBox = ({ children }: JSX.IntrinsicElements["h1"]) => {
  return (
    <h1 className="font-bold text-3xl text-white max-lg:text-md max-sm:text-base">
      {children}
    </h1>
  );
};
