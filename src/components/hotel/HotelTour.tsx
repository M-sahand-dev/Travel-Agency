import { type JSX } from "react";
import {
  Header,
  Footer,
  HotelHeroSection,
  HotelItems,
  HeaderBoxTitle,
} from "../index";

export const HotelTour = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className=" py-14 mx-8">
        <HotelHeroSection />
        <HeaderBoxTitle> رزرو هتل </HeaderBoxTitle>
        <HotelItems />
      </div>
      <Footer />
    </>
  );
};
