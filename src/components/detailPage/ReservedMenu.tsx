import { useId, useState, type JSX } from "react";
import type { CheckTour, TourProduct } from "../../types";
import { BsCalendarDate } from "react-icons/bs";
import { FaChevronDown, FaMinus } from "react-icons/fa6";

export const ReservedMenu = ({
  tureProduct,
}: {
  tureProduct: TourProduct;
}): JSX.Element => {
  const [benefits, setBenefits] = useState(tureProduct.benefits);
  const id = useId();
  const benefitsTotal = benefits.reduce((sum, item) => sum + item.cont, 0);
  const totalBeforeDiscount = tureProduct.price + benefitsTotal;
  const discountAmount = totalBeforeDiscount * (tureProduct.discount / 100);
  const finalPrice = totalBeforeDiscount - discountAmount;
  return (
    <div className=" bg-white border dark:border-white-secondary dark:bg-dark-primary border-dark-secondary p-4 w-[416px] rounded-4xl">
      <div className=" font-Rokh flex items-center justify-between w-full">
        {tureProduct.discount > 0 ? (
          <div className=" font-bold bg-pink-primary py-2 px-6 text-white rounded-4xl">
            {tureProduct.discount}%
          </div>
        ) : (
          <div className=""></div>
        )}
        <span className="flex font-bold">
          {tureProduct.price.toLocaleString("fa-IR")} تومان /
          <p className=" text-dark-secondary">هر فرد</p>
        </span>
      </div>
      <div className=" border border-dark-secondary my-6"></div>
      <div className="flex justify-between items-center">
        <div className=" flex flex-col gap-3 ">
          <span>تاریخ شروع</span>
          <div className=" p-4 font-Rokh  flex gap-2 items-center bg-gray-quinary-6 dark:bg-dark-quaternary rounded-4xl">
            {tureProduct.startTour} <BsCalendarDate />
          </div>
        </div>
        <div className=" flex flex-col gap-3 ">
          <span>تاریخ اتمام</span>
          <div className=" p-4  font-Rokh flex gap-2 items-center bg-gray-quinary-6 dark:bg-dark-quaternary rounded-4xl">
            {tureProduct.endTour} <BsCalendarDate />
          </div>
        </div>
      </div>
      <div className="py-4">
        <span>تعداد افراد</span>
        <div className="my-2 flex items-center p-4 justify-between bg-gray-quinary-6 dark:bg-dark-quaternary rounded-4xl cursor-pointer">
          {tureProduct.strength}
          <FaChevronDown />
        </div>
      </div>
      <div className=" flex justify-between items-center">
        <span className="flex">
          <p className=" text-red-primary">*</p>
          ارسال مدارک مورد نیاز
        </span>
        <FaChevronDown />
      </div>
      <div className="py-4">
        <div className=" flex justify-between items-center py-2">
          <span>مزایا اضافه</span>
          <FaMinus />
        </div>
        <div className="">
          {tureProduct.benefitsItem.map((item) => (
            <div
              key={id + item.id}
              className=" flex items-center justify-between">
              <div className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  name={String(item.id)}
                  id={String(item.id)}
                  className="w-4 h-4"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setBenefits((prevBenefits) => [
                        ...prevBenefits,
                        {
                          id: item.id,
                          benefits: item.benefits,
                          cont: item.cont,
                        },
                      ]);
                    } else {
                      setBenefits((prevBenefits) =>
                        prevBenefits.filter((benefit) => benefit.id !== item.id)
                      );
                    }
                  }}
                />
                <label htmlFor={String(item.id)}>{item.benefits}</label>
              </div>
              <div className="font-Rokh">
                {item.cont.toLocaleString("fa-IR")}
                تومان
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <span>هزینه ها</span>
        <div className="px-4 my-2 py-2 bg-gray-quinary-6 dark:bg-dark-quaternary rounded-4xl flex flex-col gap-2">
          <div className="flex items-center justify-between *:flex *:items-center">
            <span>
              تور
              {tureProduct.checkTour.map(
                (item: CheckTour) => item.planDay.length
              )}
              روزه
            </span>
            <span className="font-Rokh">
              {tureProduct.price.toLocaleString("fa-IR")}تومان
            </span>
          </div>
          {benefits.map((item) => (
            <div
              key={id + item.id}
              className="flex items-center justify-between *:flex *:items-center">
              <span>{item.benefits}</span>
              <span className="font-Rokh">
                {item.cont.toLocaleString("fa-IR")}تومان
              </span>
            </div>
          ))}
          {tureProduct.discount > 0 ? (
            <div className="flex items-center justify-between font-Rokh *:flex *:items-center">
              <span>{tureProduct.discount}%</span>
              <span className="font-Rokh">
                {discountAmount.toLocaleString("fa-IR")}-
              </span>
            </div>
          ) : (
            <div className=""></div>
          )}
        </div>
      </div>
      <div className="flex py-4 items-center justify-between">
        <span>قیمت نهایی</span>
        <span className="font-Rokh">
          {tureProduct.discount > 0 ? (
            <span>{finalPrice.toLocaleString("fa-IR")}تومان</span>
          ) : (
            <span>{totalBeforeDiscount.toLocaleString("fa-IR")}تومان</span>
          )}
        </span>
      </div>
      <button
        type="button"
        className=" bg-blue-primary rounded-4xl grid place-items-center font-bold p-4 w-full mt-4 cursor-pointer">
        رزرو کنید
      </button>
    </div>
  );
};
