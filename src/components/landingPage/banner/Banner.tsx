import { type JSX } from "react";

export const Banner = (): JSX.Element => {
  return (
    <div className="my-14 ">
      <div className="container rounded-5xl text-white  relative mx-auto lg:bg-[url(/public/image/baner/light.png)] bg-no-repeat bg-cover  bg-center   lg:dark:bg-[url(/public/image/baner/dark.png)] dark:border dark:border-white-quinary max-lg:bg-blue-primary max-lg:dark:bg-dark-quinary">
        <div className="m-auto py-8 px-96 text-center flex flex-col items-center justify-center gap-10 max-lg:hidden ">
          <h4 className="font-Rokh font-bold text-3xl">
            برنامه سفرکن را دانلود کنید تا از آخرین ویژگی های این برنامه در تلفن
            همراه بهره مند شوید
          </h4>
          <div className="flex flex-wrap gap-6 justify-center  ">
            <button className="flex items-center gap-1 bg-white text-dark-primary p-4 rounded-5xl">
              <span>دریافت از </span>
              <img src={"/public/image/baner/بازار.png"} alt="" />
              <svg className=" w-10 h-10">
                <use href="#bazar"></use>
              </svg>
            </button>
            <button className="flex items-center gap-1 bg-white text-dark-primary p-4 rounded-5xl">
              <span>دریافت از </span>
              <img src={"/public/image/baner/مایکت.png"} alt="" />
              <svg className=" w-10 h-10">
                <use href="#myket"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className="p-8 hidden max-lg:flex gap-6 flex-col">
          <img
            className=" relative bottom-20"
            src={"/public/image/baner/Group 201.png"}
            alt=""
          />
          <h4 className="font-Rokh font-bold text-3xl  mt-8">
            برنامه سفرکن را دانلود کنید تا از آخرین ویژگی های این برنامه در تلفن
            همراه بهره مند شوید
          </h4>
          <div className="flex gap-4 flex-col">
            <button className="flex items-center gap-1 bg-white text-dark-primary p-4 rounded-5xl justify-center w-full">
              <span>دریافت از </span>
              <img src={"/public/image/baner/بازار.png"} alt="" />
              <svg className=" w-10 h-10">
                <use href="#bazar"></use>
              </svg>
            </button>
            <button className="flex items-center gap-1 bg-white text-dark-primary p-4 rounded-5xl justify-center w-full">
              <span>دریافت از </span>
              <img src={"/public/image/baner/مایکت.png"} alt="" />
              <svg className=" w-10 h-10">
                <use href="#myket"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
