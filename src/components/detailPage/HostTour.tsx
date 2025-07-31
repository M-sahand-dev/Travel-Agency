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
        <div className="">{currentTour?.hostTour.title}</div>
        <div className="">
          {currentTour?.hostTour.services.map((item: string, i: number) => (
            <span key={i}>{item}</span>
          ))}
        </div>
        <div className="">
          {currentTour?.hostTour.conditions.map((item: string, i: number) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
