import type { JSX } from "react";
import {
  HroSectionTxt,
  HeroImg,
  SearchBar,
  HeroSectionResponsve,
} from "./index";

export const HroSection = (): JSX.Element => {
  return (
    <section className="pt-24">
      <div className="container mx-auto  flex justify-between">
        <HroSectionTxt />
        <SearchBar />
        <HeroImg />
        <HeroSectionResponsve />
      </div>
    </section>
  );
};
