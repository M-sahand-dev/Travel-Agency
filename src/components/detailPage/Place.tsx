import { type JSX, useId } from "react";
import { Outlet, useParams } from "react-router-dom";
import { tourProductData } from "../../constants";

export const Place = (): JSX.Element => {
  const { id } = useParams();
  const idTure = useId();
  const currentTour = tourProductData.find((tour) => tour.id === Number(id));
  console.log(currentTour);
  return (
    <div>
      <div className=" py-4 grid grid-cols-3 gap-4 max-lg:grid-cols-1">
        {currentTour?.place.map((place) => (
          <div
            key={idTure + place.id}
            className="p-4  border text-center border-dark-secondary rounded-2xl">
            <div className="">
              <img
                className="w-full h-60 rounded-2xl"
                src={place.img}
                alt={place.title}
              />
            </div>
            <div className=" flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">{place.title}</h2>
              <p className="text-gray-500">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
