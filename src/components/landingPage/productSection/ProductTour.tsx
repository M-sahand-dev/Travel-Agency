import { type JSX } from "react";
import { Link } from "react-router-dom";

export const ProductTour = (): JSX.Element => {
  return (
    <div className="my-14">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg max-lg:text-md max-sm:text-base font-Rokh">
            محبوب ترین مکان ها 🗼
            <div className="absolute h-[3px] w-[45px] bg-blue-primary"></div>
          </h1>
          <Link to={"/"} className="py-4 px-8 bg-dark-secondary rounded-4xl">
            دیدن همه
          </Link>
        </div>
      </div>
    </div>
  );
};
