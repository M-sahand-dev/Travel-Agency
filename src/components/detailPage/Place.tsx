import { type JSX, useId } from "react";
import { useParams } from "react-router-dom";
import { tourProductData } from "../../constants";

export const Place = (): JSX.Element => {
  const { id } = useParams();
  const idTure = useId();
  const currentTour = tourProductData.find((tour) => tour.id === Number(id));
  console.log(currentTour);
  return (
    <div>
      <div className="">
        {currentTour?.place.map((place) => (
          <div key={idTure + place.id} className="">
            <div className="">
              <img src={place.img} alt={place.title} />
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold">{place.title}</h2>
              <p className="text-gray-500">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
