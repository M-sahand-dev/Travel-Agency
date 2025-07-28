import { type JSX, useId, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { TourProduct } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export const ProductDetails = ({
  navigate,
  location,
  tureProduct,
}: {
  navigate: () => void;
  location: import("react-router-dom").Location;
  tureProduct: TourProduct;
}): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setSwiperInstance] = useState<SwiperType | null>(null);
  const id = useId();

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };
  if (tureProduct) {
    return (
      <div key={id + tureProduct.id} className="">
        <div className="flex justify-between items-center py-4">
          <div className="">
            {tureProduct.isDomestic ? "تور داخلی" : "تور خارجی"}/
            {tureProduct.categoryTour}/{tureProduct.contry}/{tureProduct.title}
          </div>
          <div className="">
            <Link
              to={`/`}
              className="flex items-center gap-2 p-4 dark:border-dark-secondary border rounded-2xl">
              بازگشت به خانه
              <FaArrowLeft />
            </Link>
          </div>
        </div>
        <div className=" relative w-full">
          <div className="flex absolute z-10 top-8 w-full items-center bg-dark-glass-contrast-2 p-4 rounded-3xl">
            <div className="flex items-center gap-3 px-4">
              {" "}
              <span>{tureProduct.title}</span>
              <div className="flex items-center gap-2">
                <button className="next p-1 border rounded-full">
                  <FaArrowRight />
                </button>
                <button className="prev p-1 border rounded-full">
                  <FaArrowLeft />
                </button>
              </div>
            </div>
            <div className="w-full border"></div>
            <div className="flex w-20 px-4">
              {tureProduct.img.length} / {String(activeIndex + 1).padStart(2)}
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            loop={false}
            initialSlide={activeIndex}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            className="relative">
            {tureProduct.img.map((image, index) => (
              <SwiperSlide className={` relative z-0 `} key={id + index}>
                <img
                  src={image}
                  alt={tureProduct.title}
                  className="w-full h-full object-cover rounded-6xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Outlet />
      </div>
    );
  } else {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>گشتم نبود نگرد نیست</h2>
      </div>
    );
  }
};
