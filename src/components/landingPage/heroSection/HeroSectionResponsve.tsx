import { type JSX } from "react";
import {
  BoxTxt,
  HeroImgResponsiv,
  HeroTitle,
  PlaceBox,
  SearchBarResponsive,
} from "./index";

export const HeroSectionResponsve = (): JSX.Element => {
  return (
    <div className="lg:hidden flex flex-col gap-6 py-10 w-full ">
      <BoxTxt />
      <HeroTitle />
      <HeroImgResponsiv />
      <PlaceBox />
      <SearchBarResponsive />
    </div>
  );
};
