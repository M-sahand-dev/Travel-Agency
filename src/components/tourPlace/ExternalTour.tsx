import { useId, type JSX } from "react";
import {
  Header,
  Footer,
  ExternalTourHero,
  HeaderBoxTitle,
  SeeMoreBtn,
  ProductBox,
} from "../index";
import { tourProductData } from "../../constants";
export const ExternalTour = (): JSX.Element => {
  const id = useId();
  return (
    <div className="">
      <Header />
      <div className="py-14">
        <ExternalTourHero />
        <div className="flex justify-between px-12 py-8">
          <HeaderBoxTitle>تور خارجی</HeaderBoxTitle>
          <SeeMoreBtn />
        </div>
        {/* Add any additional components or sections for external tours here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12">
          {tourProductData
            .filter((item) => item.categoryTour !== "تور ایران")
            .map((product) => (
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
      <Footer />
    </div>
  );
};
