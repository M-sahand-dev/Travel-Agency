import { type JSX } from "react";
import { Link } from "react-router-dom";

export const Title = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-lg max-lg:text-md max-sm:text-base font-Rokh">
        محبوب ترین مکان ها 🗼
        <div className="absolute h-[3px] w-[45px] bg-blue-primary"></div>
      </h1>
      <Link
        to={"/"}
        className="py-4 px-8 bg-gray-quinary dark:bg-dark-secondary rounded-4xl">
        دیدن همه
      </Link>
    </div>
  );
};
