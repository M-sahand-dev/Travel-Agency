import { type JSX } from "react";
import { Footer, Header } from "../index";
import { ProductDetails } from "./index";
import { useParams } from "react-router-dom";
import { tourProductData } from "../../constants";

export const DetailPage = (): JSX.Element => {
  const getProduct = (number: number) => {
    return tourProductData.find((tour) => tour.id === number);
  };
  const params = useParams();
  const tureProduct = getProduct(parseInt(String(params.id)));
  return (
    <div className="">
      <Header />
      <div className="py-20 px-12">
        <ProductDetails tureProduct={tureProduct} />
      </div>
      <Footer />
    </div>
  );
};
