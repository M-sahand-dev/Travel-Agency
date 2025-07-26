import type { JSX } from "react";
import { Header } from "../index";
import { HroSection, ProductTour, TorsPruduct, WhyUsTravel } from "./index";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="px-12">
      <Header />
      <HroSection />
      <ProductTour />
      <WhyUsTravel />
      <TorsPruduct />
    </div>
  );
};
