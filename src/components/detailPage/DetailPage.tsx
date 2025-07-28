import { type JSX } from "react";
import { Footer, Header } from "../index";
import { ProductDetails } from "./index";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { tourProductData } from "../../constants";

export const DetailPage = (): JSX.Element => {
  const getProduct = (number: number) => {
    return tourProductData.find((tour) => tour.id === number);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const tureProduct = getProduct(parseInt(String(params.id)));
  return (
    <div className="">
      <Header />
      <div className="py-20 px-12">
        <ProductDetails
          navigate={navigate}
          location={location}
          tureProduct={tureProduct}
        />
      </div>
      <Footer />
    </div>
  );
};
