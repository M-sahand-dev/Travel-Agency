import { type JSX } from "react";
import { Header, Footer, HeaderBoxTitle } from "../index";

export const Itinerary = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="container px-12 py-16">
        <div className=" my-32 p-8 bg-dark-glass-contrast-2">
          <HeaderBoxTitle>سفرنامه</HeaderBoxTitle>
        </div>
      </div>
      <Footer />
    </div>
  );
};
