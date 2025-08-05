import { useId, useState, type JSX } from "react";
import { travelInsuranceData } from "../../constants";
import { IoIosArrowDown } from "react-icons/io";

export const Description = (): JSX.Element => {
  const id = useId();
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs =
    travelInsuranceData.whatIsInsurance.description.split("\n");
  return (
    <div className=" py-8">
      <div className="flex items-center justify-between gap-8 max-lg:flex-wrap max-lg:gap-4 max-lg:justify-center">
        <div className="w-[600px] mb-4 flex flex-col justify-center gap-4">
          <h2 className="font-black text-3xl ">
            {travelInsuranceData.mainBanner.title}
          </h2>
          <p className=" leading-9 text-base text-justify">
            {travelInsuranceData.mainBanner.description}
          </p>
        </div>
        <img
          src={travelInsuranceData.mainBanner.image}
          className="w-[600px] h-[600px] dark:hidden  max-lg:w-[400px] max-lg:h-[400px] max-md:w-[300px] max-md:h-[300px]"
          alt=""
        />
        <img
          src={
            "/public/image/travel-insurance/ChatGPT Image Aug 5, 2025, 04_17_29 PM.png"
          }
          className="w-[600px] h-[600px] dark:block hidden rounded-2xl max-lg:w-[400px] max-lg:h-[400px] max-md:w-[300px] max-md:h-[300px]"
          alt=""
        />
      </div>
      <div className="py-8 max-lg:justify-center">
        <h2 className="font-black text-3xl ">
          {travelInsuranceData.services.title}
        </h2>
        <p className=" my-4 leading-9 text-base text-justify">
          {travelInsuranceData.services.description}
        </p>
        <div className="flex justify-between flex-wrap max-lg:justify-center">
          {travelInsuranceData.services.coverages.map((item) => (
            <div key={id + item.title} className="flex">
              {typeof item.icon === "string" ? (
                <img src={item.icon} alt={item.title} />
              ) : item.icon ? (
                <span aria-label={item.title}>
                  {typeof item.icon === "function" ? <item.icon /> : null}
                </span>
              ) : null}
              <div className="flex gap-4 flex-col  p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-dark-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 flex max-lg:flex-wrap gap-8 ">
        <img
          src={travelInsuranceData.whatIsInsurance.image}
          alt={travelInsuranceData.whatIsInsurance.title}
          className="w-[600px] h-[600px] rounded-2xl max-lg:w-[400px] max-lg:h-[400px] max-md:w-[300px] max-md:h-[300px] text-center"
        />
        <div className="mb-4 flex flex-col justify-center gap-4">
          <h2 className="font-black text-3xl ">
            {travelInsuranceData.whatIsInsurance.title}
          </h2>
          {isExpanded ? (
            paragraphs.map((para, index) => (
              <p key={index} className=" leading-9 text-base text-justify">
                {para}
              </p>
            ))
          ) : (
            <p className=" leading-9 text-base text-justify">{paragraphs[0]}</p>
          )}

          {paragraphs.length > 1 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer flex items-center gap-1 text-sm md:text-base">
              {isExpanded ? "نمایش کمتر" : "مطالعه بیشتر"}
              <IoIosArrowDown
                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>
      </div>
      <div className="py-4 flex max-lg:flex-wrap gap-8 items-center">
        <div className=" flex flex-col gap-4">
          <h2 className="font-black text-3xl ">
            {travelInsuranceData.purchaseInfo.title}
          </h2>
          <p className=" leading-9 text-base text-justify">
            {travelInsuranceData.purchaseInfo.description}
          </p>
          <p className=" leading-9 text-base text-justify">
            بیمه های مسافرتی خدمات متنوعی به مسافران ارائه می‌کنند، برای مثال:
          </p>
          <div className=" grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 ">
            {travelInsuranceData.purchaseInfo.coverages.map((coverage) => (
              <div key={coverage.title} className="flex items-center gap-2">
                {typeof coverage.icon === "string" ? (
                  <img src={coverage.icon} alt={coverage.title} />
                ) : coverage.icon ? (
                  <span
                    aria-label={coverage.title}
                    className="p-4 bg-blue-quaternary text-white rounded-5xl">
                    {typeof coverage.icon === "function" ? (
                      <coverage.icon />
                    ) : null}
                  </span>
                ) : null}
                <span className=" text-4xs w-28">{coverage.title}</span>
              </div>
            ))}
          </div>
        </div>
        <img
          src={travelInsuranceData.purchaseInfo.image}
          alt={travelInsuranceData.purchaseInfo.title}
          className="w-[600px] h-[600px] rounded-2xl max-lg:w-[400px] max-lg:h-[400px] max-md:w-[300px] max-md:h-[300px]"
        />
      </div>
    </div>
  );
};
