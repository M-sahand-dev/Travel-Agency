import { type JSX } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { productTour } from "../../../constants";
import { FaStar, FaPlus } from "react-icons/fa";

export const ProductTour = (): JSX.Element => {
  const id = uuidv4();
  return (
    <div className="my-14">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg max-lg:text-md max-sm:text-base font-Rokh">
            محبوب ترین مکان ها 🗼
            <div className="absolute h-[3px] w-[45px] bg-blue-primary"></div>
          </h1>
          <Link
            to={"/"}
            className="py-4 px-8 bg-gray-quinary dark:bg-dark-secondary rounded-4xl">
            دیدن همه
          </Link>
        </div>
        <div className=" grid grid-cols-3 max-lg:grid-cols-1 gap-4 mt-8">
          {productTour.map((product) => (
            <div
              key={id + product.id}
              className="p-4 bg-white dark:bg-dark-primary border border-dark-secondary dark:border-white-secondary rounded-4xl">
              <img
                src={product.img}
                alt={product.title}
                className="w-full rounded-4xl"
              />
              <div className="mt-4 p-2">
                <div className="flex justify-between ">
                  <Link to={"/"} className=" text-2xl">
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
                      {product.price}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
