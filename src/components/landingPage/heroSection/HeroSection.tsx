import type { JSX } from "react";
import { HroSectionTxt, HeroImg, SearchBar } from "./index";

export const HroSection = (): JSX.Element => {
  return (
    <section className="pt-8 px-12">
      <div className="container mx-auto  flex justify-between">
        <HroSectionTxt />
        <SearchBar />
        <HeroImg />
      </div>
    </section>
  );
};
