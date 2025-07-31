import { type JSX } from "react";
import { productTour } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FaStar, FaPlus } from "react-icons/fa";

export const ProductItems = (): JSX.Element => {
  const id = uuidv4();
  const location = useLocation();
  return (
    <Link
      to={`/detail/${productTour.map((id) => id.id)}${location.search}`}
      className=" grid grid-cols-3 max-lg:grid-cols-1 gap-4 mt-8">
      {productTour.map((product) => (
        <div
          key={id + product.id}
          className=" relative p-4 bg-white dark:bg-dark-primary border border-dark-secondary dark:border-white-secondary rounded-4xl">
          {product.discount > 0 ? (
            <div className="text-white discountP absolute top-[-1rem] w-[5.3rem] h-[5.3rem] p-4 grid font-Rokh place-items-center right-[-1rem]">
              <span className="font-bold text-2xl">% {product.discount}</span>
              <div className="">تخفیف</div>
            </div>
          ) : (
            ""
          )}
          <img
            src={product.img}
            alt={product.title}
            className="w-full rounded-4xl"
          />
          <div className="mt-4 p-2">
            <div className="flex justify-between ">
              <Link
                to={`/detail/${product.id}${location.search}`}
                className=" text-2xl">
                تور {product.title}
              </Link>
              <p className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                {product.numbers}
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-4">{product.time}</p>
            <div className="flex justify-between items-center mt-12">
              <div className="flex items-center gap-1">
                <p className="font-Rokh text-4xl font-semibold">
                  {product.discount > 0 ? (
                    <div className="">
                      <span className="mt-4">
                        {Math.round(
                          product.price * (1 - product.discount / 100)
                        ).toLocaleString("fa-IR")}
                      </span>
                      <p className="text-gray-600 text-6xs absolute">
                        <del>{product.price.toLocaleString("fa-IR")}</del>
                      </p>
                    </div>
                  ) : (
                    product.price.toLocaleString("fa-IR")
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
        </div>
      ))}
    </Link>
  );
};
