import { useId, type JSX } from "react";
import {
  Header,
  Footer,
  HotelHeroSection,
  ProductBox,
  HeaderBoxTitle,
} from "../index";
import { hotelReservation } from "../../constants";

export const HotelTour = (): JSX.Element => {
  const id = useId();
  return (
    <>
      <Header />
      <div className=" py-14 mx-8">
        <HotelHeroSection />
        <HeaderBoxTitle> رزرو هتل </HeaderBoxTitle>
        <div className="grid grid-cols-3 gap-4 mt-14 max-lg:grid-cols-1">
          {hotelReservation.map((product) => (
            <ProductBox
              key={id + product.id}
              id={product.id}
              title={product.title}
              img={product.img[0]}
              numbers={product.numbers}
              time={product.time}
              price={product.price}
              discount={product.discount}
              hotel={true}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
