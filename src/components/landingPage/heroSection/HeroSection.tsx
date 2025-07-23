import type { JSX } from "react";
import { HroSectionTxt, HeroImg } from "./index";

export const HroSection = (): JSX.Element => {
  return (
    <section className="pt-8 px-12">
      <div className="container mx-auto  flex justify-between">
        <HroSectionTxt />
        {/* <div className="">{/* searchbar </div> */}
        <HeroImg />
      </div>
    </section>
  );
};
