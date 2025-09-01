import { type JSX } from "react";
import { useParams } from "react-router-dom";
import { tourProductData } from "../../constants";

export const HostTour = (): JSX.Element => {
  const { id } = useParams();
  const currentTour = tourProductData.find((tour) => tour.id === Number(id));
  console.log(currentTour);

  return (
    <div className=" rounded-lg  p-6">
      <div className="mb-6">
        <div className="text-2xl font-bold  mb-4 border-b pb-2">
          {currentTour?.hostTour.title}
        </div>

        <div className="space-y-3 mb-6">
          <h3 className="font-semibold text-lg ">Services Included:</h3>
          <ul className="list-disc pl-5 space-y-2 ">
            {currentTour?.hostTour.services.map((item: string, i: number) => (
              <li key={i} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg ">Conditions:</h3>
          <ul className="list-disc pl-5 space-y-2 ">
            {currentTour?.hostTour.conditions.map((item: string, i: number) => (
              <li key={i} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
