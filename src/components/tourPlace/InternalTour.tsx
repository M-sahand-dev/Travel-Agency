import { type JSX } from "react";
import {
  Header,
  Footer,
  InternalTourHero,
  HeaderBoxTitle,
  SeeMoreBtn,
  InternalTourBox,
} from "../index";

export const InternalTour = (): JSX.Element => {
  return (
    <div className="">
      <Header />
      <div className="py-14">
        <InternalTourHero />
        <div className=" flex justify-between px-12 py-8">
          <HeaderBoxTitle>تور داخلی</HeaderBoxTitle>
          <SeeMoreBtn />
        </div>
        {/* Add any additional components or sections for internal tours here */}
        <InternalTourBox />
      </div>
      <Footer />
    </div>
  );
};
