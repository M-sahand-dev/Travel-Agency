import type { JSX } from "react";
import { Header } from "../index";
import { HroSection, ProductTour } from "./index";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="px-12">
      <Header />
      <HroSection />
      <ProductTour />
    </div>
  );
};
