import { useId, type JSX } from "react";
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { MdOutlineWbSunny } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import {
  heroMeniItem,
  toPersianNumber,
  convertToPersian,
} from "../../constants";
import { TItlePanelBox } from "../index";
import { FaPencilAlt, FaUserCheck } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoCloseOutline, IoKey } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

export const PannerItem = (): JSX.Element => {
  const id = useId();
  return (
    <section className="flex flex-col lg:gap-y-8 w-full overflow-hidden">
      <header className="flex items-center justify-between bg-dark-glass-contrast-3 shrink-0 w-full h-22 px-5 sm:px-7  max-lg:border-b max-lg:border-b-light lg:rounded-lg lg:dark:darker-gradient">
        <button className="md:!hidden  btn-icon-area text-2xl">
          <RxDashboard />
        </button>
        <div className="relative z-60 hidden md:flex items-center justify-between gap-x-4 w-72 xl:w-85  bg-dark-secondary rounded-lg py-1 px-4 h-12">
          <input
            type="search"
            placeholder="سفر های من , تیکت های من , مالی ..."
            className="size-full text-label placeholder:text-muted placeholder:text-3xs outline-hidden"
          />
          <CiSearch className="text-xl font-black" />
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex gap-x-3">
            <button className=" btn-icon-area text-2xl">
              <GrCart />
            </button>
            <button className="  btn-icon-area text-2xl">
              <MdOutlineWbSunny />
            </button>
          </div>
          <div className="max-lg:hidden w-px h-6 bg-dark-secondary"></div>
          {/* time */}
          <div className="max-lg:hidden text-3xs select-none">
            جمعه ۱۷ مرداد
          </div>
        </div>
      </header>
      <div className="dark:bg-dark-glass-contrast-3 bg-white flex items-center justify-between flex-wrap gap-x-3 gap-y-4 px-5 sm:px-7 py-5 lg:rounded-lg max-lg:border-b max-lg:border-b-light">
        {heroMeniItem.map((item) => (
          <div
            key={id + item.id}
            className=" w-32 sm:w-38 flex items-center gap-x-3 sm:gap-x-5">
            <img
              className="size-9 sm:size-11 md:size-12"
              src={item.image}
              alt={item.title}
            />
            <div className="flex flex-col gap-y-1 text-label sm:text-caption">
              <div className="font-bold flex gap-x-2">
                <span>{toPersianNumber(1)}</span>
                <span>{item.name}</span>
              </div>
              <span className="font-normal text-gary-primary">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="dark:bg-dark-glass-contrast-3 bg-white flex flex-col gap-x-3 gap-y-6 px-5 sm:px-7 py-5 lg:rounded-lg max-lg:border-b max-lg:border-b-light">
        <div className=" flex justify-between items-center">
          <div className="flex gap-x-3">
            <FaUserCheck className="font-bold text-3xl max-lg:text-md max-sm:text-base" />
            <TItlePanelBox>اطلاعات حساب کاربری</TItlePanelBox>
          </div>
          <button
            type="button"
            className="max-lg:flex hidden items-center gap-x-2  border-2 p-4 rounded-2xl  text-blue-primary hover:bg-sky-200 cursor-pointer border-blue-primary">
            <IoKey />
            <span>ویرایش کلمه عبور</span>
          </button>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-y-4 flex-wrap">
            <div className="flex items-center gap-6">
              <span className="">شماره موبایل</span>
              <span className="">{convertToPersian("09381234567")}</span>
              <div className="flex items-center gap-x-2 bg-green-300 px-2 py-1 rounded-full">
                <span className="text-4xs p-1  rounded-full text-white bg-green-900">
                  <TiTick className="" />
                </span>
                <span className="font-normal text-green-900">تایید شده</span>
              </div>
              <button
                type="button"
                className="flex items-center gap-x-2 text-sky-600  cursor-pointer hover:bg-sky-200 py-2 px-3 rounded-full">
                <FaPencilAlt className="text-4xs" />
                ویرایش
              </button>
            </div>
            <div className="flex items-center gap-6">
              <span className="">ایمیل</span>
              <span className="">mehdileilaei443@gmail.com</span>
              <div className="flex items-center gap-x-2 bg-red-300 px-2 py-1 rounded-full">
                <span className="text-4xs p-1  rounded-full text-white bg-red-900">
                  <IoCloseOutline className="" />
                </span>
                <span className="font-normal text-red-900">تایید نشده</span>
              </div>
              <button
                type="button"
                className="flex items-center gap-x-2 text-sky-600 cursor-pointer hover:bg-sky-200 py-2 px-3 rounded-full">
                <FaPencilAlt className="text-4xs" />
                ویرایش
              </button>
            </div>
          </div>
          <button
            type="button"
            className="flex max-lg:hidden items-center gap-x-2  border-2 p-4 rounded-2xl  text-blue-primary hover:bg-sky-200 cursor-pointer border-blue-primary">
            <IoKey />
            <span>ویرایش کلمه عبور</span>
          </button>
        </div>
      </div>
      <div className="dark:bg-dark-glass-contrast-3 bg-white flex flex-col gap-x-3 gap-y-6 px-5 sm:px-7 py-5 lg:rounded-lg max-lg:border-b max-lg:border-b-light">
        <div className=" flex justify-between items-center">
          <div className="flex gap-x-3">
            <FaRegCircleUser className="font-bold text-3xl max-lg:text-md max-sm:text-base" />
            <TItlePanelBox>اطلاعات شخصی</TItlePanelBox>
          </div>
          <button
            type="button"
            className="   p-2 rounded-2xl flex gap-x-2 items-center  text-blue-primary hover:bg-sky-200 cursor-pointer ">
            <FaPencilAlt className="text-4xs" />
            <span>ویرایش اطلاعات</span>
          </button>
        </div>
        <div className=" grid grid-cols-2 items-center max-lg:grid-cols-1 gap-y-6 gap-x-3">
          <div className="flex flex-col gap-y-4 flex-wrap">
            <div className="flex items-center gap-6">
              <span className="">نام و نام خانوادگی</span>
              <span className="">زهرا لیلایی</span>
              <div className="flex items-center gap-x-2 bg-green-300 px-2 py-1 rounded-full">
                <span className="text-4xs p-1  rounded-full text-white bg-green-900">
                  <TiTick className="" />
                </span>
                <span className="font-normal text-green-900">تایید شده</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="">
                شماره تماس <span className="text-red-primary"> ضروری</span>
              </span>
              <span className="">{convertToPersian("09381234567")}</span>
              <div className="flex items-center gap-x-2 bg-red-300 px-2 py-1 rounded-full">
                <span className="text-4xs p-1  rounded-full text-white bg-red-900">
                  <IoCloseOutline className="" />
                </span>
                <span className="font-normal text-red-900">تایید نشده</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 flex-wrap">
            <div className="flex items-center gap-6">
              <span className="">کد ملی</span>
              <span className="">{convertToPersian("1234567890")}</span>
              <div className="flex items-center gap-x-2 bg-green-300 px-2 py-1 rounded-full">
                <span className="text-4xs p-1  rounded-full text-white bg-green-900">
                  <TiTick className="" />
                </span>
                <span className="font-normal text-green-900">تایید شده</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="">تاریخ تولد</span>
              <span className="">{convertToPersian("1386/01/01")}</span>
              <div className="flex items-center gap-x-2 bg-red-300 px-2 py-1 rounded-full">
                <span className="text-4xs p-1  rounded-full text-white bg-red-900">
                  <IoCloseOutline className="" />
                </span>
                <span className="font-normal text-red-900">تایید نشده</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
