import { type JSX } from "react";
import { BoxTxt, HeroTitle, PlaceBox } from "./index";

export const HroSectionTxt = (): JSX.Element => {
  return (
    <div className="font-Rokh flex flex-col gap-4">
      <BoxTxt />
      <HeroTitle />
      <PlaceBox />
    </div>
  );
};
