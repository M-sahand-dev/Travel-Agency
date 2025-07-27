import type { JSX } from "react";
import { Footer, Header } from "../index";
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
    <div className="">
      <Header />
      <div className="px-12">
        <HroSection />
        <ProductTour />
        <WhyUsTravel />
        <TorsPruduct />
        <Banner />
        <Comment />
      </div>
      <Footer />
    </div>
  );
};
