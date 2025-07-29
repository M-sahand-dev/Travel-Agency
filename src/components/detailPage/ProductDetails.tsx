import { type JSX, useId, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaArrowLeft, FaMinus } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { CiBookmarkPlus } from "react-icons/ci";
import { ReservedMenu, SliderImg } from "./index";
import type { CheckTour, TourProduct } from "../../types";

export const ProductDetails = ({
  tureProduct,
}: {
  tureProduct: TourProduct;
}): JSX.Element => {
  const id = useId();

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
          <div className="flex justify-between items-center w-full">
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
          <ReservedMenu tureProduct={tureProduct} />
        </div>
        <Outlet />
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
