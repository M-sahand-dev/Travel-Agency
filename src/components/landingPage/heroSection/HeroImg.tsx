import { type JSX, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid";
import { FaArrowRight } from "react-icons/fa6";
// Swiper dependencies for slider functionality
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { dataHeroImg } from "../../../constants";
import type { dataHeroImgType } from "../../../types";
import type { Swiper as SwiperType } from "swiper";

export const HeroImg = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setSwiperInstance] = useState<SwiperType | null>(null);
  const id = uuidv4();

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <div className="w-[636px] h-[808px] relative font-Rokh text-white">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        loop={true}
        initialSlide={activeIndex}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        className="w-full h-full">
        {dataHeroImg.map((items: dataHeroImgType) => (
          <SwiperSlide key={id + items.id}>
            <img
              src={items.img}
              className="w-full h-full rounded-5xl absolute"
              alt=""
            />
            <div className="relative ">
              <div className="bg-white-tertiary border rounded-4xl py-6 px-8 absolute top-4 left-4 border-gradent-primary ">
                <span className="flex items-center gap-[2px] font-bold text-md">
                  <CiLocationOn />
                  {items.contry}
                </span>
                <h3 className="font-bold text-2xl text-76">{items.city}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/*
       */}
      <div className="absolute z-50 top-52 left-8 text-5xl flex items-center justify-between font-Rokh gap-4">
        <button className="next">
          <FaArrowRight />
        </button>
        <span className="">{String(activeIndex + 1).padStart(2, "0")}</span>
        <button className="rotate-180 prev">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
