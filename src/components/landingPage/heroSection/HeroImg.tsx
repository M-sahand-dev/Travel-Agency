import { type JSX } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

export const HeroImg = (): JSX.Element => {
  return (
    <div className="w-[636px] h-[808px] relative">
      <img
        src={"/public/image/place/antalia.png"}
        className="w-full h-full rounded-5xl absolute"
        alt=""
      />
      <div className="relative font-Rokh">
        <div className="">
          <span>
            <CiLocationOn />
            تایلند
          </span>
          <h3>پاتایا</h3>
        </div>
        <div className="">
          <button>
            <FaArrowRight />
          </button>
          <span className="">01</span>
          <button className="rotate-180">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
