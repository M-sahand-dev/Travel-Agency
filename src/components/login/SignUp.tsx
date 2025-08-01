import { type JSX } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const SignUp = (): JSX.Element => {
  return (
    <>
      <div className="container p-8 flex items-center justify-between max-lg:justify-center max-lg:flex-col h-screen overflow-hidden">
        <img
          src={"/public/image/loginPicture.png"}
          alt="loginPicture"
          className=" rounded-4xl max-lg:block hidden w-80"
        />
        <div className=" p-4">
          <h1 className="max-lg:hidden mb-12 font-bold text-4xl">خوش آمدید</h1>
          <div className="flex flex-col items-center gap-4 w-80">
            <div className="flex gap-6 flex-col p-4 ">
              <div className="w-full">
                <h2 className="max-lg:hidden font-medium text-2xl py-2">
                  ثبت نام
                </h2>
                <h1 className="max-lg:block hidden font-normal text-2xl py-2">
                  خوش آمدید
                </h1>
                <form className="flex flex-col gap-4 w-80">
                  <input
                    type="tel"
                    className=" p-4 border border-dark-secondary placeholder:text-dark-secondary outline-hidden rounded-4xl"
                    placeholder="شماره همراه "
                    dir="rtl"
                  />
                  <div className="flex items-center  border border-dark-secondary p-2  rounded-4xl">
                    <input
                      type="password"
                      className="w-full p-2 outline-hidden placeholder:text-dark-secondary"
                      placeholder="رمز عبور "
                    />
                    <FaRegEyeSlash className="text-dark-secondary text-2xl" />
                  </div>
                  <div className="flex items-center  border border-dark-secondary p-2  rounded-4xl">
                    <input
                      type="password"
                      className="w-full p-2 outline-hidden placeholder:text-dark-secondary"
                      placeholder="تکرار رمز عبور"
                    />
                    <FaRegEyeSlash className="text-dark-secondary text-2xl" />
                  </div>
                </form>
              </div>
              <button
                type="button"
                className={` p-4 text-white bg-gray-desaible dark:bg-dark-quaternary rounded-4xl w-full`}>
                ارسال
              </button>
            </div>
            <div className="flex  items-center justify-center w-full">
              <div className="border border-gray-quinary-2 w-full h-px"></div>
              <div className=" w-72 text-center text-gary-tertiary text-5xs font-normal">
                وارد شدن با
              </div>
              <div className="border border-gray-quinary-2 w-full h-px"></div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center gap-4 p-4 rounded-4xl border border-dark-secondary w-[326px]">
              Google
              <FcGoogle className=" w-6 h-6" />
            </button>
            <div className="flex font-bold items-center justify-center text-5xs w-full">
              عضو سفرکن هستید؟
              <Link to={"/login"} className=" text-blue-primary">
                ورود
              </Link>
            </div>
          </div>
        </div>
        <img
          src={"/public/image/loginPicture.png"}
          alt="loginPicture"
          className=" rounded-4xl max-lg:hidden"
        />
      </div>
    </>
  );
};
