import { type JSX } from "react";
import { useParams } from "react-router-dom";
import { tourProductData } from "../../constants";

export const HostTour = (): JSX.Element => {
  const { id } = useParams();
  const currentTour = tourProductData.find((tour) => tour.id === Number(id));
  console.log(currentTour);

  return (
    <div>
      <div className="">
        <div className=" mb-4 font-black text-xl">
          {currentTour?.hostTour.title}
        </div>
        <div className="flex flex-col gap-2">
          {currentTour?.hostTour.services.map((item: string, i: number) => (
            <span key={i}>{item}</span>
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {currentTour?.hostTour.conditions.map((item: string, i: number) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
