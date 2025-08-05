import { type JSX } from "react";
import {
  Header,
  Footer,
  ExternalTourHero,
  HeaderBoxTitle,
  SeeMoreBtn,
  ExternalTourBox,
} from "../index";
export const ExternalTour = (): JSX.Element => {
  return (
    <div className="">
      <Header />
      <div className="py-14">
        <ExternalTourHero />
        <div className="flex justify-between px-12 py-8">
          <HeaderBoxTitle>تور خارجی</HeaderBoxTitle>
          <SeeMoreBtn />
        </div>
        {/* Add any additional components or sections for external tours here */}
        <ExternalTourBox />
      </div>
      <Footer />
    </div>
  );
};
