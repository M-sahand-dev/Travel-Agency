import { useId, useState, type JSX } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { TourProduct } from "../../types";

export const SliderImg = ({
  tureProduct,
}: {
  tureProduct: TourProduct;
}): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setSwiperInstance] = useState<SwiperType | null>(null);
  const id = useId();

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
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
  );
};
