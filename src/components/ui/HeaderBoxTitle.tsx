import { type JSX } from "react";

export const HeaderBoxTitle = ({ children }: JSX.IntrinsicElements["h1"]) => {
  return (
    <h1 className="font-bold text-lg max-lg:text-md max-sm:text-base font-Rokh">
      {children}
      <div className="absolute h-[3px] w-[45px] bg-blue-primary"></div>
    </h1>
  );
};
