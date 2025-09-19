import { useState, type JSX } from "react";
import {
  Header,
  Footer,
  SearchBar,
  SearchBarResponsive,
  HeaderBoxTitle,
  ProductBox,
} from "../index";
import { v4 as uuidv4 } from "uuid";
import { CategoryMenuMobileItem } from "./CategoryMenuMobileItem";
import { tourProductCategory, tourProductData } from "../../constants";
import { NavLink, useLocation } from "react-router-dom";
import { LuSettings2 } from "react-icons/lu";
import type { TourProduct } from "../../types";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export const AllProduct = (): JSX.Element => {
  const id = uuidv4();
  const location = useLocation();
  const [filteredTours, setFilteredTours] = useState(tourProductData);
  const handleCategory = (category: string) => {
    if (category === "همه تور ها") {
      setFilteredTours(tourProductData);
      return;
    }
    const newCategory = tourProductData.filter(
      (item) => item.categoryTour === category
    );
    setFilteredTours(newCategory);
  };
  return (
    <div>
      <Header />
      <div className="py-14 ">
        <div className="relative bg-[url('/image/hotel/light-Hotel.webp')] dark:bg-[url('/image/hotel/dark-Hotel.png')] bg-no-repeat bg-cover bg-center  p-28">
          <SearchBar />
          <SearchBarResponsive />
        </div>
        <div className="px-12 py-8 container mx-auto">
          <div className="max-w-4xl my-8 mx-auto p-4 border border-dark-secondary rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow w-full md:w-auto">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaSearch className="text-dark-tertiary" />
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="جستجوی تور، مقصد یا هتل..."
                  className="w-full py-3 pr-10 pl-4 border border-dark-secondary rounded-lg   outline-none transition-all duration-200"
                />
              </div>
              <div className="relative w-full md:w-auto">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-3 px-4 border border-dark-secondary rounded-lg  transition-colors duration-200">
                  <span>مقصد</span>
                  <IoIosArrowDown className="mr-2 text-gray-500" />
                </button>
              </div>
              <button
                type="button"
                className="w-full md:w-auto py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center">
                جستوجو
                <FaSearch className="mr-2 md:hidden" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between max-lg:flex-col gap-6">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-6">
                <HeaderBoxTitle>دیدن همه</HeaderBoxTitle>
                <div className="flex max-lg:hidden items-center gap-8 text-dark-secondary dark:text--white-quinary-2 *:cursor-pointer text-2xl max-lg:gap-6 max-lg:text-xl max-sm:text-3xs">
                  {tourProductCategory.map((item) => (
                    <NavLink
                      key={item.id}
                      to={`/allproduct/${item.id}${location.search}`}
                      className={({ isActive }) =>
                        isActive
                          ? "max-lg:p-0 p-1 border-b max-lg:border-0 border-dark-secondary font-bold max-lg:font-normal dark:border-white-quinary-2 text-dark-secondary dark:text-white-quinary-2"
                          : ""
                      }
                      onClick={() => handleCategory(item.title)}>
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </div>
              <button
                className="text-2xl  cursor-pointer bg-dark-tertiary p-4 rounded-full text-white"
                type="button">
                <LuSettings2 />
              </button>
            </div>
            <CategoryMenuMobileItem handleCategory={handleCategory} />
          </div>
          <div className=" grid grid-cols-3 max-lg:grid-cols-1 gap-4 mt-8">
            {filteredTours.map((product: TourProduct) => (
              <ProductBox
                key={id + product.id}
                id={product.id}
                title={product.title}
                img={product.img[0]}
                numbers={product.numbers}
                time={product.time}
                price={product.price}
                discount={product.discount}
                hotel={false}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
