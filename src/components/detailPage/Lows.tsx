import { useId, type JSX } from "react";
import { useParams } from "react-router-dom";
import { tourProductData } from "../../constants";

export const LowsTure = (): JSX.Element => {
  const { id } = useParams();
  const idTure = useId();
  const currentTour = tourProductData.find((tour) => tour.id === Number(id));
  console.log(currentTour?.lows.cancellation);
  return (
    <div>
      <div className="">
        <div className="">
          <h5>توضیحات</h5>
          {currentTour?.lows.cancellation.map((txt: string, i: number) => (
            <p key={idTure + i}>{txt}</p>
          ))}
        </div>
        <div className="">
          <h5>توضیحات</h5>
          {currentTour?.lows.general.map((txt: string, i: number) => (
            <p key={idTure + i}>{txt}</p>
          ))}
        </div>
        <div className="">
          <h5>توضیحات</h5>
          {currentTour?.lows.health.map((txt: string, i: number) => (
            <p key={idTure + i}>{txt}</p>
          ))}
        </div>
        <div className="">
          <h5>توضیحات</h5>
          {currentTour?.lows.notes.map((txt: string, i: number) => (
            <p key={idTure + i}>{txt}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
