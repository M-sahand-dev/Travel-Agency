import { type JSX } from "react";
import { Footer, Header } from "../index";
import { ProductDetails, ProductTour } from "./index";

export const DetailPage = (): JSX.Element => {
  return (
    <div className="">
      <Header />
      <div className="py-20 px-12">
        <ProductDetails />
        <ProductTour />
      </div>
      <Footer />
    </div>
  );
};
