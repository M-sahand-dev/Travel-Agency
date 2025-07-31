import { useId, type JSX } from "react";
import { Outlet, useParams } from "react-router-dom";
import { tourProductData } from "../../constants";

export const LowsTure = (): JSX.Element => {
  const { id } = useParams();
  const idTure = useId();
  const currentTour = tourProductData.find((tour) => tour.id === Number(id));
  console.log(currentTour?.lows.cancellation);

  return (
    <div>
      <div className="py-4 flex flex-col gap-4">
        <div className="">
          <h5 className="mb-4 font-black text-xl">لغو سفر</h5>
          {currentTour?.lows.cancellation.map((txt: string, i: number) => (
            <p key={idTure + i} className="px-4">
              <span className="text-red-primary">*</span>
              {txt}
            </p>
          ))}
        </div>
        <div className="">
          <h5 className="mb-4 font-black text-xl">وسایل مورد نیاز</h5>
          {currentTour?.lows.general.map((txt: string, i: number) => (
            <p key={idTure + i} className="px-4">
              <span className="text-red-primary">*</span>
              {txt}
            </p>
          ))}
        </div>
        <div className="">
          <h5 className="mb-4 font-black text-xl">توضیحات پزشکی و لوازمات</h5>
          {currentTour?.lows.health.map((txt: string, i: number) => (
            <p key={idTure + i} className="px-4">
              <span className="text-red-primary">*</span>
              {txt}
            </p>
          ))}
        </div>
        <div className="">
          <h5 className="mb-4 font-black text-xl">قوانین</h5>
          {currentTour?.lows.notes.map((txt: string, i: number) => (
            <p key={idTure + i} className="px-4">
              <span className="text-red-primary">*</span>
              {txt}
            </p>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
