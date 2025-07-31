import { type JSX, useId } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import { ReservedMenu, Review, SliderImg } from "./index";
// import type { TourProduct } from "../../types";
import { tourProductData } from "../../constants";

export const ProductDetails = (): JSX.Element => {
  const id = useId();
  const getProduct = (number: number) => {
    return tourProductData.find((tour) => tour.id === number);
  };
  const params = useParams();
  const tureProduct = getProduct(parseInt(String(params.id)));

  if (tureProduct) {
    return (
      <div key={id + tureProduct.id} className="">
        <div className="flex justify-between items-center py-4">
          <div className="">
            {tureProduct.isDomestic ? "تور داخلی" : "تور خارجی"}/
            {tureProduct.categoryTour}/{tureProduct.contry}/{tureProduct.title}
          </div>
          <div className="">
            <Link
              to={`/`}
              className="flex items-center gap-2 p-4 dark:border-dark-secondary border rounded-2xl">
              بازگشت به خانه
              <FaArrowLeft />
            </Link>
          </div>
        </div>
        <SliderImg tureProduct={tureProduct} />
        <div className="flex gap-6 mt-4">
          <div className="w-full">
            <div className="flex justify-between items-center ">
              <div className=" font-bold flex items-center gap-1 text-4xl font-Rokh">
                تور
                <h1>
                  {tureProduct.checkTour.map((item) => item.planDay.length)}
                </h1>
                روزه {tureProduct.contry}/{tureProduct.title}
              </div>
              <button className="dark:bg-dark-quinary-4 grid place-items-center p-4 rounded-full bg-gray-quinary-6 text-6xs font-bold">
                <CiBookmarkPlus />
              </button>
            </div>
            <div className=" font-Rokh">
              {tureProduct.isDomestic ? "تور داخلی" : "تور خارجی"}/
              {tureProduct.categoryTour}/{tureProduct.contry}/
              {tureProduct.title}
            </div>
            <Review />
          </div>
          <ReservedMenu tureProduct={tureProduct} />
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>گشتم نبود نگرد نیست</h2>
      </div>
    );
  }
};
