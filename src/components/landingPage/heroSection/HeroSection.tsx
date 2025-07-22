import type { JSX } from "react";
import { HroSectionTxt } from "./index";

export const HroSection = (): JSX.Element => {
  return (
    <section className="pt-8 px-4">
      <div className="container mx-auto ">
        <HroSectionTxt />
        <div className="">{/* searchbar */}</div>
        <div className="">{/* Heroimg */}</div>
      </div>
    </section>
  );
};
