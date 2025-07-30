import { type JSX } from "react";
import { Footer, Header } from "../index";
import { ProductDetails } from "./index";
import { Outlet } from "react-router-dom";

export const DetailPage = (): JSX.Element => {
  return (
    <div className="">
      <Header />
      <div className="py-20 px-12">
        <ProductDetails />
      </div>
      <Footer />

      <Outlet />
    </div>
  );
};
