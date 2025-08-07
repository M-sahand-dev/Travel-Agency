import { type JSX } from "react";
import { Header, Footer, HeaderBoxTitle, ItineraryUser } from "../index";

export const Itinerary = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="container px-12 py-16 mx-auto">
        <div className=" my-16 p-8 bg-dark-glass-contrast-2">
          <HeaderBoxTitle>سفرنامه</HeaderBoxTitle>
        </div>
        <ItineraryUser />
      </div>
      <Footer />
    </div>
  );
};
