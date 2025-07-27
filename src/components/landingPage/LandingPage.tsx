import type { JSX } from "react";
import { Header } from "../index";
import {
  Banner,
  HroSection,
  ProductTour,
  TorsPruduct,
  WhyUsTravel,
  Comment,
} from "./index";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="px-12">
      <Header />
      <HroSection />
      <ProductTour />
      <WhyUsTravel />
      <TorsPruduct />
      <Banner />
      <Comment />
    </div>
  );
};
