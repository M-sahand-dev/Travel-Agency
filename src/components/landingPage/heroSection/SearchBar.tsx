import { type JSX, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";
// import { v4 as uuidv4 } from "uuid";
import { tourProductData } from "../../../constants/data";
import { Link } from "react-router-dom";
import type { TourProduct } from "../../../types";
import Calendar, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { MdOutlineErrorOutline } from "react-icons/md";

export const SearchBar = (): JSX.Element => {
  const [toggleShape, setToggleShape] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<{
    id: number;
    title: string;
  } | null>(null);

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectDataOutput, setSelectDataOutput] = useState<string>("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDatePickerOutput, setShowDatePickerOutput] = useState(false);

  const [toggleShapeCount, setToggleShapeCount] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleToggleShapeCount = () => {
    setToggleShapeCount(!toggleShapeCount);
  };

  const handleDateChange = (dateObject: DateObject) => {
    const dateString = dateObject.format("YYYY/MM/DD");
    setSelectedDate(dateString);
    setShowDatePicker(false);
  };

  const numberPerson = adultCount + childCount + babyCount;

  const validatePassengers = () => {
    if (numberPerson > 9) {
      setErrorMessage("حداکثر تعداد مسافران ۹ نفر است");
      return false;
    }

    const maxChildrenPerAdult = 3;
    if (childCount >= adultCount * maxChildrenPerAdult) {
      setErrorMessage(
        `به ازای هر بزرگسال حداکثر ${maxChildrenPerAdult} کودک مجاز است`
      );
      return false;
    }

    if (babyCount >= adultCount) {
      setErrorMessage("تعداد نوزادان نمی‌تواند بیشتر از تعداد بزرگسالان باشد");
      return false;
    }

    if (adultCount <= 1) {
      setErrorMessage("حداقل یک بزرگسال الزامی است");
      return false;
    }

    if (babyCount >= 0 && adultCount === 0) {
      setErrorMessage("برای نوزادان باید حداقل یک بزرگسال وجود داشته باشد");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleCountChange = (
    type: "adult" | "child" | "baby",
    operation: "increase" | "decrease"
  ) => {
    let newAdultCount = adultCount;
    let newChildCount = childCount;
    let newBabyCount = babyCount;

    if (type === "adult") {
      newAdultCount =
        operation === "increase"
          ? Math.min(adultCount + 1, 9)
          : Math.max(1, adultCount - 1);
    } else if (type === "child") {
      newChildCount =
        operation === "increase"
          ? Math.min(childCount + 1, 9 - adultCount - babyCount)
          : Math.max(0, childCount - 1);
    } else if (type === "baby") {
      newBabyCount =
        operation === "increase"
          ? Math.min(babyCount + 1, adultCount, 9 - adultCount - childCount)
          : Math.max(0, babyCount - 1);
    }

    const tempNumberPerson = newAdultCount + newChildCount + newBabyCount;
    if (tempNumberPerson > 9) {
      setErrorMessage("حداکثر تعداد مسافران ۹ نفر است");
      return;
    }

    setAdultCount(newAdultCount);
    setChildCount(newChildCount);
    setBabyCount(newBabyCount);
    validatePassengers();
  };

  const handleSelectDataOutput = (dateObject: DateObject) => {
    const dateString = dateObject.format("YYYY/MM/DD");
    setSelectDataOutput(dateString);
    setShowDatePickerOutput(false);
  };

  const handleToggle = () => {
    setToggleShape(!toggleShape);
  };

  const handleCitySelect = (city: TourProduct) => {
    setSelectedPlace({ id: city.id, title: city.title });
    setToggleShape(false);
  };

  return (
    <div className="hidden lg:block absolute border border-dark-secondary bg-white dark:bg-dark-quinary dark:border-white-quaternary p-8 rounded-6xl z-50 left-24 right-24  max-xl:left-16 max-xl:right-16 bottom-4">
      <div className="max-xl:text-base relative  flex items-center gap-8 justify-between *:flex *:gap-2 *:items-center *:cursor-pointer text-xl">
        <div className="" onClick={handleToggle}>
          <CiLocationOn />
          <p>
            {selectedPlace ? (
              selectedPlace.title
            ) : (
              <>
                <span className="text-red-primary">*</span>
                مقصد خود را انتخاب کنید
              </>
            )}
          </p>
          <IoIosArrowDown
            className={`inline-block transition-transform ${
              !toggleShape ? "rotate-180" : "rotate-0"
            }`}
          />
          <div
            className={`${
              !toggleShape
                ? "opacity-0 -translate-y-4 h-0 overflow-hidden"
                : "opacity-100 translate-y-0 h-auto"
            } absolute top-16 right-4 w-48 border dark:border-white-secondary border-dark-glass-contrast bg-white dark:bg-dark-primary p-4 rounded-2xl transition-all duration-300 ease-in-out`}>
            <ul className="flex flex-col gap-2 *:hover:bg-gray-200 dark:*:hover:bg-gray-950">
              {tourProductData.map((city: TourProduct) => (
                <li key={city.id}>
                  <button
                    type="button"
                    onClick={() => handleCitySelect(city)}
                    className="w-full px-4 py-2 text-right rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-950">
                    {city.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowDatePicker(!showDatePicker)}>
            <BsCalendarDate />
            <p>{selectedDate || "تاریخ ورود"}</p>
            <IoIosArrowDown
              className={`inline-block transition-transform ${
                showDatePicker ? "rotate-180" : ""
              }`}
            />
          </div>
          {showDatePicker && (
            <div className="absolute top-full right-0 mt-2 z-10">
              <Calendar
                calendar={persian}
                locale={persian_fa}
                value={selectedDate}
                minDate={new Date()}
                onChange={handleDateChange}
                onClose={() => setShowDatePicker(false)}
                className="bg-white dark:bg-dark-primary border dark:border-white-secondary rounded-2xl shadow-lg"
              />
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              if (!selectedDate) {
                alert("لطفا ابتدا تاریخ ورود را انتخاب کنید");
                return;
              }
              setShowDatePickerOutput(!showDatePickerOutput);
            }}>
            <BsCalendarDate />
            <p>{selectDataOutput || "تاریخ خروج"}</p>
            <IoIosArrowDown
              className={`inline-block transition-transform ${
                showDatePickerOutput ? "rotate-180" : ""
              }`}
            />
          </div>
          {showDatePickerOutput && (
            <div className="absolute top-full right-0 mt-2 z-10">
              <Calendar
                calendar={persian}
                locale={persian_fa}
                value={selectDataOutput}
                onChange={handleSelectDataOutput}
                minDate={
                  selectedDate ? new DateObject(selectedDate) : undefined
                }
                className="bg-white dark:bg-dark-primary border dark:border-white-secondary rounded-2xl shadow-lg"
              />
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleToggleShapeCount}>
            <LuUserRound />
            <p>{toggleShapeCount ? "تعداد" : numberPerson + " " + "نفر"}</p>
            <IoIosArrowDown className="inline-block" />
          </div>
          <div
            className={`absolute top-12 right-4 w-72 justify-between ${
              !toggleShapeCount ? "hidden" : "flex"
            } flex-col gap-2 border bg-white dark:border-white-secondary border-dark-glass-contrast dark:bg-dark-primary p-4 rounded-2xl transition-all duration-300 ease-in-out`}>
            <div className="flex items-center justify-between mb-4 lg:mb-5 last:mb-2 mt-2">
              <div className="flex items-center gap-2 text-5xs">
                <span>بزرگسال</span>
                <span className="text-gray-primary">(۱۲ سال به بالا)</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleCountChange("adult", "increase")}
                  className={`w-6 h-6 bg-blue-primary ${
                    numberPerson >= 9 ? "opacity-50" : ""
                  } text-white rounded-full flex items-center justify-center cursor-pointer`}>
                  +
                </button>
                <span className="text-5xs">{adultCount}</span>
                <button
                  type="button"
                  onClick={() => handleCountChange("adult", "decrease")}
                  className={`w-6 h-6 bg-blue-primary ${
                    adultCount === 1 ? "opacity-50" : ""
                  } text-white rounded-full flex items-center justify-center cursor-pointer`}>
                  -
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4 lg:mb-5 last:mb-2 mt-2">
              <div className="flex items-center gap-2 text-5xs">
                <span>کودک</span>
                <span className="text-gray-primary">(۲ تا ۱۲ سال)</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleCountChange("child", "increase")}
                  className={`w-6 h-6 bg-blue-primary ${
                    numberPerson >= 9 || childCount >= adultCount * 3
                      ? "opacity-50"
                      : ""
                  } text-white rounded-full flex items-center justify-center cursor-pointer`}>
                  +
                </button>
                <span className="text-5xs">{childCount}</span>
                <button
                  type="button"
                  onClick={() => handleCountChange("child", "decrease")}
                  className={`w-6 h-6 bg-blue-primary ${
                    childCount === 0 ? "opacity-50" : ""
                  } text-white rounded-full flex items-center justify-center cursor-pointer`}>
                  -
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4 lg:mb-5 last:mb-2 mt-2">
              <div className="flex items-center gap-2 text-5xs">
                <span>نوزاد</span>
                <span className="text-gray-primary">(۱۰ روز تا ۲ سال)</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleCountChange("baby", "increase")}
                  className={`w-6 h-6 bg-blue-primary ${
                    numberPerson >= 9 || babyCount >= adultCount
                      ? "opacity-50"
                      : ""
                  } text-white rounded-full flex items-center justify-center cursor-pointer`}>
                  +
                </button>
                <span className="text-5xs">{babyCount}</span>
                <button
                  type="button"
                  onClick={() => handleCountChange("baby", "decrease")}
                  className={`w-6 h-6 bg-blue-primary ${
                    babyCount === 0 ? "opacity-50" : ""
                  } text-white rounded-full flex items-center justify-center cursor-pointer`}>
                  -
                </button>
              </div>
            </div>
            {errorMessage && (
              <div className="flex items-center gap-4 text-red-primary text-3xs">
                <MdOutlineErrorOutline />
                <p>{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
        <Link
          to={`/detail/${selectedPlace?.id || ""}${location.search}`}
          onClick={(e) => {
            if (!selectedPlace || !validatePassengers()) {
              e.preventDefault();
              alert(
                "لطفاً مقصد را انتخاب کنید و اطلاعات مسافران را بررسی نمایید"
              );
            }
          }}
          className="py-3.5 px-14 bg-blue-primary rounded-5xl text-white">
          جستجو
        </Link>
      </div>
    </div>
  );
};
