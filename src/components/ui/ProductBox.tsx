import { type JSX } from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import type { ProductTour } from "../../types";

export const ProductBox = ({
  id,
  title,
  img,
  numbers,
  time,
  price,
  discount,
}: ProductTour): JSX.Element => {
  const location = useLocation();
  return (
    <Link
      to={`/detail/${id}${location.search}`}
      className=" relative p-4 bg-white dark:bg-dark-primary border border-dark-secondary dark:border-white-secondary rounded-4xl">
      {discount > 0 ? (
        <div className="text-white discountP absolute top-[-1rem] w-[5.3rem] h-[5.3rem] p-4 grid font-Rokh place-items-center right-[-1rem]">
          <span className="font-bold text-2xl">% {discount}</span>
          <div className="">تخفیف</div>
        </div>
      ) : (
        ""
      )}
      <img src={img} alt={title} className="w-full rounded-4xl" />
      <div className="mt-4 p-2">
        <div className="flex justify-between ">
          <Link to={`/detail/${id}${location.search}`} className=" text-2xl">
            تور {title}
          </Link>
          <p className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            {numbers}
          </p>
        </div>
        <p className="text-sm text-gray-600 mt-4">{time}</p>
        <div className="flex justify-between items-center mt-12">
          <div className="flex items-center gap-1">
            <p className="font-Rokh text-4xl font-semibold">
              {discount > 0 ? (
                <div className="">
                  <span className="mt-4">
                    {Math.round(price * (1 - discount / 100)).toLocaleString(
                      "fa-IR"
                    )}
                  </span>
                  <p className="text-gray-600 text-6xs absolute">
                    <del>{price.toLocaleString("fa-IR")}</del>
                  </p>
                </div>
              ) : (
                price.toLocaleString("fa-IR")
              )}
            </p>
            <span className="font-Rokh text-2xl font-semibold">تومان</span>
            <p className="font-Rokh text-sm font-semibold text-gray-500">
              هر فرد
            </p>
          </div>
          <button
            type="button"
            className="p-4 rounded-full text-white bg-blue-primary">
            <FaPlus />
          </button>
        </div>
      </div>
    </Link>
  );
};
