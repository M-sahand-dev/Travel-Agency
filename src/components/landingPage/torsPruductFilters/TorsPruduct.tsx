import { type JSX } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuSettings2 } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";
import { tourProductData } from "../../../constants";
import { FaPlus, FaStar } from "react-icons/fa6";
import { LoremProduct } from "../../ui";

export const TorsPruduct = (): JSX.Element => {
  const id = uuidv4();

  return (
    <div>
      <div className="my-40">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <h1 className="font-bold text-lg max-lg:text-md max-sm:text-base font-Rokh">
                پرفروش ترین تور ها 💣
                <div className="absolute h-[3px] w-[45px] bg-blue-primary"></div>
              </h1>
              <div className="flex max-lg:hidden items-center gap-8 text-dark-secondary dark:text--white-quinary-2 *:cursor-pointer text-2xl">
                <NavLink to={"/"}>همه تور ها</NavLink>
                <NavLink to={"/"}>تور ایران</NavLink>
                <NavLink to={"/"}>تور اروپا</NavLink>
                <NavLink to={"/"}>تور آسیا</NavLink>
              </div>
            </div>
            <div className="flex  items-center gap-8">
              <button
                className="text-2xl max-lg:hidden cursor-pointer"
                type="button">
                <LuSettings2 />
              </button>
              <Link
                to={"/"}
                className="py-4 px-8 bg-gray-quinary dark:bg-dark-secondary rounded-4xl">
                دیدن همه
              </Link>
            </div>
          </div>
          <div className="hidden max-lg:flex justify-between items-center m-4">
            <div className="flex items-center gap-6 text-dark-secondary dark:text--white-quinary-2 *:cursor-pointer text-xl max-sm:text-3xs">
              <NavLink to={"/"}>همه تور ها</NavLink>
              <NavLink to={"/"}>تور ایران</NavLink>
              <NavLink to={"/"}>تور اروپا</NavLink>
              <NavLink to={"/"}>تور آسیا</NavLink>
            </div>
            <button className="text-2xl  cursor-pointer" type="button">
              <LuSettings2 />
            </button>
          </div>
          <div className=" grid grid-cols-3 max-lg:grid-cols-1 gap-4 mt-8">
            {tourProductData.map((product) => (
              <div
                key={id + product.id}
                className=" relative h-full p-4 bg-white dark:bg-dark-primary border border-dark-secondary dark:border-white-secondary rounded-4xl">
                {product.discount > 0 ? (
                  <div className="text-white discountP absolute top-[-1rem] w-[5.3rem] h-[5.3rem] p-4 grid font-Rokh place-items-center right-[-1rem]">
                    <span className="font-bold text-2xl">
                      % {product.discount}
                    </span>
                    <div className="">تخفیف</div>
                  </div>
                ) : (
                  ""
                )}
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full rounded-4xl h-64"
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
              </div>
            ))}
          </div>
          <LoremProduct />
        </div>
      </div>
    </div>
  );
};
