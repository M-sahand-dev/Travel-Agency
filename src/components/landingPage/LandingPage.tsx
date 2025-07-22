import type { JSX } from "react";
import { Header } from "../index";
import { HroSection } from "./heroSection";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="LandingPage">
      <Header />
      <HroSection />
    </div>
  );
};
