import { type JSX } from "react";

import { LoremProduct } from "../../ui";
import { Title, ProductItems } from "./index";

export const ProductTour = (): JSX.Element => {
  return (
    <div className="my-14">
      <div className="container mx-auto">
        <Title />
        <ProductItems />
        <LoremProduct />
      </div>
    </div>
  );
};
