import { type JSX, useState } from "react";
import { tourProductData } from "../../../constants";
import { LoremProduct } from "../../ui";
import { CategoryMenuMobile, TitleMenu } from "./index";
import { ProductBox } from "../../index";
import type { TourProduct } from "../../../types";
import { v4 as uuidv4 } from "uuid";

export const TorsPruduct = (): JSX.Element => {
  const [filteredTours, setFilteredTours] = useState(tourProductData);
  const id = uuidv4();

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
      <div className="mt-40">
        <div className="container mx-auto">
          <TitleMenu handleCategory={handleCategory} />
          <CategoryMenuMobile handleCategory={handleCategory} />
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
          <LoremProduct />
        </div>
      </div>
    </div>
  );
};
