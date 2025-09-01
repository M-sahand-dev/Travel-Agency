import { type JSX, useId, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { tourProductData } from "../../constants";
import { FaChevronDown } from "react-icons/fa";

export const CheckTour = (): JSX.Element => {
  const { id } = useParams();
  const idTour = useId();
  const currentTour = tourProductData.find((tour) => tour.id === Number(id));
  const [showMore, setShowMore] = useState<number | null>(null);

  const handelShowMore = (id: number) => {
    setShowMore(showMore === id ? null : id);
  };

  return (
    <div>
      <div className=" flex flex-col gap-8">
        {currentTour?.checkTour.map((item) => (
          <div key={idTour + item.id} className=" flex flex-col gap-8 py-4 ">
            <p className="text-base text-justify">{item.description}</p>
            <div className="w-full border border-dark-secondary max-lg:hidden"></div>
            <div className=" max-lg:flex hidden  items-center justify-between dark:bg-dark-quinary-5 p-4">
              <div className=" font-Rokh text-2xl font-bold">
                {currentTour?.price.toLocaleString("fa-IR")} تومان
              </div>
              <Link
                className="py-4 px-8 rounded-4xl bg-blue-primary text-white"
                to={"/"}>
                رزرو کنید
              </Link>
            </div>
            <div className="font-Rokh flex flex-col  gap-6">
              <h5 className="font-Bold text-xl">ویژگی ها</h5>
              <div className="flex gap-4 flex-wrap">
                {item.features.map((feature) => (
                  <div
                    key={idTour + feature.title}
                    className="flex items-center gap-2">
                    <feature.icon />
                    <h6>{feature.title}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full border border-dark-secondary"></div>

            <div className="font-Rokh">
              <h5 className="font-bold text-xl">برنامه تور (روز به روز)</h5>
              <div className="">
                {item.planDay.map((day) => (
                  <div
                    key={idTour + day.id + "day"}
                    onClick={() => handelShowMore(day.id)}
                    className=" cursor-pointer ">
                    <div className="flex justify-between items-center py-4 border-b border-b-dark-secondary">
                      <span>{day.title}</span>
                      <FaChevronDown
                        className={`transition-transform ${showMore === day.id ? "transform rotate-180" : ""}`}
                      />
                    </div>
                    <div
                      className={`${showMore !== day.id ? "hidden" : "block"}`}>
                      <p>{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
