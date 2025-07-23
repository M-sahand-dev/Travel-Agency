import { type JSX } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

export const HeroImg = (): JSX.Element => {
  return (
    <div className="w-[636px] h-[808px] relative text-white">
      <img
        src={"/public/image/place/pataya.png"}
        className="w-full h-full rounded-5xl absolute"
        alt=""
      />
      <div className="relative font-Rokh">
        <div className="bg-white-tertiary border rounded-4xl py-6 px-8 absolute top-4 left-4 border-gradent-primary ">
          <span className="flex items-center gap-[2px] font-bold text-md">
            <CiLocationOn />
            تایلند
          </span>
          <h3 className="font-bold text-2xl text-76">پاتایا</h3>
        </div>
        <div className="absolute top-52 left-12 text-5xl flex items-center justify-between">
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
