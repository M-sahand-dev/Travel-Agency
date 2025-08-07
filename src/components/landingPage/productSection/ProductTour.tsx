import { type JSX } from "react";
import { LoremProduct } from "../../ui";
import { Title } from "./index";
import { productTour } from "../../../constants";
import { v4 as uuidv4 } from "uuid";
import { ProductBox } from "../../index";

export const ProductTour = (): JSX.Element => {
  const id = uuidv4();
  return (
    <div className="my-14">
      <div className="container mx-auto">
        <Title />
        <div className=" grid grid-cols-3 max-lg:grid-cols-1 gap-4 mt-8">
          {productTour.map((product) => (
            <ProductBox key={id + product.id} {...product} hotel={false} />
          ))}
        </div>
        <LoremProduct />
      </div>
    </div>
  );
};
