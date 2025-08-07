import { type JSX } from "react";

import { productTour } from "../../constants";
import { v4 as uuidv4 } from "uuid";
import { ProductBox, TitleProduct } from "../index";

export const ProductTour = (): JSX.Element => {
  const id = uuidv4();
  return (
    <div className="my-14">
      <div className="container mx-auto">
        <TitleProduct />
        <div className=" grid grid-cols-3 max-lg:grid-cols-1 gap-4 mt-8">
          {productTour.map((product) => (
            <ProductBox key={id + product.id} {...product} hotel={false} />
          ))}
        </div>
      </div>
    </div>
  );
};
