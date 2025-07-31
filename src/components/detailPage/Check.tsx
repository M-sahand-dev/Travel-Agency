import { type JSX, useId } from "react";
import { Outlet, useParams } from "react-router-dom";
import { tourProductData } from "../../constants";

export const CheckTour = (): JSX.Element => {
  const { id } = useParams();
  const idTour = useId();
  const currentTour = tourProductData.find((tour) => tour.id === Number(id));
  console.log(currentTour?.checkTour);

  return (
    <div>
      <div className="">
        {currentTour?.checkTour.map((item) => (
          <div key={idTour + item.id} className="">
            <p>{item.description}</p>
            <div className=" font-Rokh">
              <h5>ویژگی ها</h5>
              <div className="flex">
                {item.features.map((feature) => (
                  <div key={idTour + feature.title} className="flex">
                    <feature.icon />
                    <h6>{feature.title}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="font-Rokh">
              <h5>برنامه تور (روز به روز)</h5>
              <div className="">
                {item.planDay.map((day) => (
                  <div key={idTour + day.id + "day"} className="">
                    <span>{day.title}</span>
                    <div className="">
                      <p>{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
