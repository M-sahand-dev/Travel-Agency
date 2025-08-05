import { useId, type JSX } from "react";
import { tourProductData } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import { FaPlus, FaStar } from "react-icons/fa";

export const InternalTourBox = (): JSX.Element => {
  const id = useId();
  const location = useLocation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12">
      {tourProductData
        .filter((item) => item.categoryTour === "تور ایران")
        .map((product) => (
          <Link
            to={`/detail/${product.id}${location.search}`}
            key={id + product.id}
            className=" relative h-full p-4 bg-white dark:bg-dark-primary border border-dark-secondary dark:border-white-secondary rounded-4xl">
            {product.discount > 0 ? (
              <div className="text-white discountP absolute top-[-1rem] w-[5.3rem] h-[5.3rem] p-4 grid font-Rokh place-items-center right-[-1rem]">
                <span className="font-bold text-2xl">% {product.discount}</span>
                <div className="">تخفیف</div>
              </div>
            ) : (
              ""
            )}
            <img
              src={product.img[0]}
              alt={product.title}
              className="w-full rounded-4xl h-64"
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
                  <span className="font-Rokh text-2xl font-semibold">
                    تومان
                  </span>
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
        ))}
    </div>
  );
};
