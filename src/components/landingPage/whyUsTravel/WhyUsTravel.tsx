import { type JSX } from "react";
import { whyUsTravelData } from "../../../constants";
import { v4 as uuidv4 } from "uuid";

export const WhyUsTravel = (): JSX.Element => {
  const id = uuidv4();
  return (
    <div className="my-14">
      <div className=" relative container mx-auto">
        <img
          className="dark:block absolute z-[-1]"
          src="/public/image/world.png"
          alt=""
        />
        <img
          className="dark:hidden absolute z-[-1]"
          src="/public/image/Vector-light.png"
          alt=""
        />
        <h1 className="font-bold text-lg max-lg:text-md max-sm:text-base font-Rokh">
          چرا سفر کن ❓
          <div className="absolute h-[3px] w-[45px] bg-blue-primary"></div>
        </h1>
        <div className="bg-blue-primary custom-box   dark:bg-dark-primary dark:border dark:white-quinary mt-8 rounded-5xl p-12 grid grid-cols-3 max-lg:grid-cols-1 gap-16">
          {whyUsTravelData.map((item) => (
            <div
              key={id + item.id}
              className="before:contents-[''] before:absolute before:bottom-40 before:rounded-full before:z-10 before:transform-translateX-[-50%] before:w-[100px] before:h-[100px] before:bg-blue-quaternary dark:before:bg-dark-quinary-2 p-4 text-white relative bg-blue-quaternary dark:bg-dark-quinary-2 rounded-3xl flex flex-col gap-8 items-center">
              <div
                className={`grid place-items-center relative z-50 bg-blue-quinary dark:bg-dark-primary rounded-full p-4 `}>
                <img src={item.icon} alt={item.title} className="w-8 h-8" />
              </div>
              <h2 className=" text-center font-medium text-2xl">
                {item.title}
              </h2>
              <p className="text-center font-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
