import { v4 as uuidv4 } from "uuid";
import { type JSX } from "react";
import { iconBar } from "../../../constants";
import type { IIconBar } from "../../../types";

export const PlaceBox = (): JSX.Element => {
  const id = uuidv4();
  return (
    <div className="flex gap-4 max-lg:items-center max-lg:justify-around">
      {iconBar.map((item: IIconBar) => {
        return (
          <div
            className="flex font-bold flex-col items-center gap-2"
            key={id + item.id}>
            <div className="p-4 border  border-dark-secondary dark:border-b-white-secondary rounded-2xl text-2xl grid place-items-center">
              {item.icon}
            </div>
            <span className="">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};
