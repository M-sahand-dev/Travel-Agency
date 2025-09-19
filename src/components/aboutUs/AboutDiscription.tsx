import { type JSX } from "react";
import { Link } from "react-router-dom";
import { HeaderBoxTitle } from "../ui";
import { aboutTravelAgency, companyValues } from "../../constants";

export const AboutDiscription = (): JSX.Element => {
  return (
    <div className="mx-auto">
      <div className="dark:bg-[url('/image/world.png')] bg-[url('/image/Vector-light.png')] h-full  bg-no-repeat bg-cover  bg-center flex  items-center p-24 text-4xl  text-white ">
        <div className=" flex bg-dark-glass-contrast-3 rounded-2xl w-full p-4  gap-4 relative top-32 border border-gary-tertiary">
          <h1>درباره</h1>
          <Link
            to={"/"}
            className="flex gap-1 font-Rokh font-black pr-0.5 items-center w-20">
            <img src={"../../../image/Vector.png"} className="w-5 h-5" />
            <span className="">سفرکن</span>
          </Link>
        </div>
      </div>
      <div className="pt-14 mx-8">
        <div className=" flex flex-col gap-8 p-4  rounded-2xl w-full">
          <HeaderBoxTitle> برنامه سفر کن</HeaderBoxTitle>
          <div className="flex flex-col gap-2">
            <h2 className=" font-Rokh text-3xl font-bold">
              {aboutTravelAgency.header.title}
            </h2>
            <p className=" text-5xs">{aboutTravelAgency.header.description}</p>
          </div>
          <div className="w-full border border-dark-secondary"></div>
          <div className="flex flex-col gap-2">
            <h2 className=" font-Rokh text-3xl font-bold">
              {aboutTravelAgency.features.title}
            </h2>
            <div className="flex flex-col gap-2">
              {aboutTravelAgency.features.items?.map((item) => (
                <p className=" text-5xs" key={item}>
                  -{item}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full border border-dark-secondary"></div>
          <div className="flex flex-col gap-2">
            <h2 className=" font-Rokh text-3xl font-bold">
              {aboutTravelAgency.services.title}
            </h2>
            <div className=" flex flex-col gap-2">
              {aboutTravelAgency.services.items?.map((item) => (
                <p className=" text-5xs" key={item}>
                  -{item}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full border border-dark-secondary"></div>
          <div className="flex flex-col gap-2">
            <h2 className=" font-Rokh text-3xl font-bold">
              {aboutTravelAgency.aboutUs.title}
            </h2>
            <p className=" text-5xs">{aboutTravelAgency.aboutUs.description}</p>
          </div>
          <div className="w-full border border-dark-secondary"></div>
          <div className="flex flex-col gap-2">
            <h2 className=" font-Rokh text-3xl font-bold">
              {aboutTravelAgency.testimonials.title}
            </h2>
            <p className=" text-5xs">
              {aboutTravelAgency.testimonials.description}
            </p>
          </div>
        </div>
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold ">ارزش‌های سازمانی ما</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                اصولی که ما را به یک تیم منسجم و هدفمند تبدیل کرده‌است
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
              {companyValues.map((value) => (
                <div
                  key={value.id}
                  className="bg-white dark:bg-dark-quaternary  rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4 gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-3">
                        <span className="font-bold font-Rokh">{value.id}</span>
                      </div>
                      <h3 className="text-xl font-semibold ">{value.title}</h3>
                    </div>
                    <p className=" mt-2 leading-relaxed flex-grow">
                      {value.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm text-blue-500">
                        بیشتر بدانید
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                آشنایی بیشتر با فرهنگ سازمانی
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
