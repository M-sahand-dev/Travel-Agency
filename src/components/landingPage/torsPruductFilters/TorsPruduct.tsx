import { type JSX, useState } from "react";
import { tourProductData } from "../../../constants";
import { LoremProduct } from "../../ui";
import { CategoryMenuMobile, ProductTurItem, TitleMenu } from "./index";

export const TorsPruduct = (): JSX.Element => {
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
      <div className="mt-40">
        <div className="container mx-auto">
          <TitleMenu handleCategory={handleCategory} />
          <CategoryMenuMobile handleCategory={handleCategory} />
          <ProductTurItem filteredTours={filteredTours} />
          <LoremProduct />
        </div>
      </div>
    </div>
  );
};
