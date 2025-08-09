import { useId, type JSX } from "react";
import { CiSearch } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { MdOutlineWbSunny } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import {
  heroMeniItem,
  toPersianNumber,
  convertToPersian,
  darkBlueTheme,
} from "../../constants";
import { TItlePanelBox } from "../index";
import { FaPencilAlt, FaUserCheck } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoCloseOutline, IoKey } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";

export const PannerItem = (): JSX.Element => {
  const id = useId();

  const panelBoxStyle = {
    backgroundColor: darkBlueTheme.colors.background.paper,
    borderRadius: darkBlueTheme.borderRadius.medium,
    boxShadow: darkBlueTheme.shadows.small,
    border: `1px solid ${darkBlueTheme.colors.border.default}`,
  };

  return (
    <section className="flex flex-col lg:gap-y-8 w-full overflow-hidden">
      {/* Header */}
      <header
        className="flex items-center justify-between shrink-0 w-full h-22 px-5 sm:px-7 max-lg:border-b lg:rounded-lg"
        style={{
          ...panelBoxStyle,
          background: `linear-gradient(135deg, ${darkBlueTheme.colors.primary.dark}, ${darkBlueTheme.colors.primary.main})`,
        }}>
        <button
          className="md:!hidden btn-icon-area text-2xl"
          style={{ color: darkBlueTheme.colors.text.contrast }}>
          <RxDashboard />
        </button>
        <div
          className="relative z-60 hidden md:flex items-center justify-between gap-x-4 w-72 xl:w-85 rounded-lg py-1 px-4 h-12"
          style={{
            backgroundColor: darkBlueTheme.colors.secondary.main,
            border: `1px solid ${darkBlueTheme.colors.border.dark}`,
          }}>
          <input
            type="search"
            placeholder="سفر های من , تیکت های من , مالی ..."
            className="size-full placeholder:text-3xs outline-none bg-transparent"
            style={{ color: darkBlueTheme.colors.text.primary }}
          />
          <CiSearch style={{ color: darkBlueTheme.colors.text.secondary }} />
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex gap-x-3">
            <button
              className="btn-icon-area text-2xl"
              style={{ color: darkBlueTheme.colors.text.contrast }}>
              <GrCart />
            </button>
            <button
              className="btn-icon-area text-2xl"
              style={{ color: darkBlueTheme.colors.text.contrast }}>
              <MdOutlineWbSunny />
            </button>
          </div>
          <div
            className="max-lg:hidden w-px h-6"
            style={{
              backgroundColor: darkBlueTheme.colors.border.light,
            }}></div>
          <div
            className="max-lg:hidden text-3xs select-none"
            style={{ color: darkBlueTheme.colors.text.secondary }}>
            جمعه ۱۷ مرداد
          </div>
        </div>
      </header>

      {/* Stats Panel */}
      <div
        className="flex items-center justify-between flex-wrap gap-x-3 gap-y-4 px-5 sm:px-7 py-5 lg:rounded-lg max-lg:border-b"
        style={panelBoxStyle}>
        {heroMeniItem.map((item) => (
          <div
            key={id + item.id}
            className="  flex items-center gap-x-3 sm:gap-x-5 p-2 rounded-lg transition-colors hover:bg-opacity-50"
            style={{
              backgroundColor: darkBlueTheme.colors.action.hover,
            }}>
            <img
              className="size-9 sm:size-11 md:size-12"
              src={item.image}
              alt={item.title}
            />
            <div className="flex flex-col gap-y-1 text-label sm:text-caption">
              <div
                className="font-bold flex gap-x-2"
                style={{ color: darkBlueTheme.colors.text.primary }}>
                <span>{toPersianNumber(1)}</span>
                <span>{item.name}</span>
              </div>
              <span style={{ color: darkBlueTheme.colors.text.secondary }}>
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Account Info Panel */}
      <div
        className="flex flex-col gap-x-3 gap-y-6 px-5 sm:px-7 py-5 lg:rounded-lg max-lg:border-b"
        style={panelBoxStyle}>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-3">
            <FaUserCheck
              className="font-bold text-3xl max-lg:text-md max-sm:text-base"
              style={{ color: darkBlueTheme.colors.primary.light }}
            />
            <TItlePanelBox>اطلاعات حساب کاربری</TItlePanelBox>
          </div>
          <button
            type="button"
            className="max-lg:flex hidden items-center gap-x-2 border-2 p-4 rounded-2xl cursor-pointer transition-colors"
            style={{
              color: darkBlueTheme.colors.primary.light,
              borderColor: darkBlueTheme.colors.primary.light,
            }}>
            <IoKey />
            <span>ویرایش کلمه عبور</span>
          </button>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-y-4 flex-wrap">
            {/* Phone Number */}
            <div className="flex items-center gap-6">
              <span style={{ color: darkBlueTheme.colors.text.secondary }}>
                شماره موبایل
              </span>
              <span style={{ color: darkBlueTheme.colors.text.primary }}>
                {convertToPersian("09381234567")}
              </span>
              <div
                className="flex items-center gap-x-2 px-2 py-1 rounded-full "
                style={{
                  backgroundColor: `${darkBlueTheme.colors.status.success}20`,
                }}>
                <span
                  className="text-4xs p-1 rounded-full text-white"
                  style={{
                    backgroundColor: darkBlueTheme.colors.status.success,
                  }}>
                  <TiTick />
                </span>
                <span style={{ color: darkBlueTheme.colors.status.success }}>
                  تایید شده
                </span>
              </div>
              <button
                type="button"
                className="flex items-center gap-x-2 cursor-pointer py-2 px-3 rounded-full transition-colors hover:bg-action-hover"
                style={{ color: darkBlueTheme.colors.primary.light }}>
                <FaPencilAlt className="text-4xs" />
                ویرایش
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6">
              <span style={{ color: darkBlueTheme.colors.text.secondary }}>
                ایمیل
              </span>
              <span style={{ color: darkBlueTheme.colors.text.primary }}>
                mehdileilaei443@gmail.com
              </span>
              <div
                className="flex items-center gap-x-2 px-2 py-1 rounded-full"
                style={{
                  backgroundColor: `${darkBlueTheme.colors.status.error}20`,
                }}>
                <span
                  className="text-4xs p-1 rounded-full text-white"
                  style={{
                    backgroundColor: darkBlueTheme.colors.status.error,
                  }}>
                  <IoCloseOutline />
                </span>
                <span style={{ color: darkBlueTheme.colors.status.error }}>
                  تایید نشده
                </span>
              </div>
              <button
                type="button"
                className="flex items-center gap-x-2 cursor-pointer py-2 px-3 rounded-full transition-colors hover:bg-action-hover"
                style={{ color: darkBlueTheme.colors.primary.light }}>
                <FaPencilAlt className="text-4xs" />
                ویرایش
              </button>
            </div>
          </div>
          <button
            type="button"
            className="flex max-lg:hidden items-center gap-x-2 border-2 p-4 rounded-2xl cursor-pointer transition-colors hover:bg-action-hover"
            style={{
              color: darkBlueTheme.colors.primary.light,
              borderColor: darkBlueTheme.colors.primary.light,
            }}>
            <IoKey />
            <span>ویرایش کلمه عبور</span>
          </button>
        </div>
      </div>

      {/* Personal Info Panel */}
      <div
        className="flex flex-col gap-x-3 gap-y-6 px-5 sm:px-7 py-5 lg:rounded-lg max-lg:border-b"
        style={panelBoxStyle}>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-3">
            <FaRegCircleUser
              className="font-bold text-3xl max-lg:text-md max-sm:text-base"
              style={{ color: darkBlueTheme.colors.primary.light }}
            />
            <TItlePanelBox>اطلاعات شخصی</TItlePanelBox>
          </div>
          <button
            type="button"
            className="p-2 rounded-2xl flex gap-x-2 items-center cursor-pointer transition-colors hover:bg-action-hover"
            style={{ color: darkBlueTheme.colors.primary.light }}>
            <FaPencilAlt className="text-4xs" />
            <span>ویرایش اطلاعات</span>
          </button>
        </div>
        <div className="grid grid-cols-2 items-center max-lg:grid-cols-1 gap-y-6 gap-x-3">
          <div className="flex flex-col gap-y-4 flex-wrap">
            {/* Full Name */}
            <div className="flex items-center gap-6">
              <span style={{ color: darkBlueTheme.colors.text.secondary }}>
                نام و نام خانوادگی
              </span>
              <span style={{ color: darkBlueTheme.colors.text.primary }}>
                زهرا لیلایی
              </span>
              <div
                className="flex items-center gap-x-2 px-2 py-1 rounded-full"
                style={{
                  backgroundColor: `${darkBlueTheme.colors.status.success}20`,
                }}>
                <span
                  className="text-4xs p-1 rounded-full text-white"
                  style={{
                    backgroundColor: darkBlueTheme.colors.status.success,
                  }}>
                  <TiTick />
                </span>
                <span style={{ color: darkBlueTheme.colors.status.success }}>
                  تایید شده
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6">
              <span style={{ color: darkBlueTheme.colors.text.secondary }}>
                شماره تماس{" "}
                <span style={{ color: darkBlueTheme.colors.status.error }}>
                  {" "}
                  ضروری
                </span>
              </span>
              <span style={{ color: darkBlueTheme.colors.text.primary }}>
                {convertToPersian("09381234567")}
              </span>
              <div
                className="flex items-center gap-x-2 px-2 py-1 rounded-full"
                style={{
                  backgroundColor: `${darkBlueTheme.colors.status.error}20`,
                }}>
                <span
                  className="text-4xs p-1 rounded-full text-white"
                  style={{
                    backgroundColor: darkBlueTheme.colors.status.error,
                  }}>
                  <IoCloseOutline />
                </span>
                <span style={{ color: darkBlueTheme.colors.status.error }}>
                  تایید نشده
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-4 flex-wrap">
            {/* National Code */}
            <div className="flex items-center gap-6">
              <span style={{ color: darkBlueTheme.colors.text.secondary }}>
                کد ملی
              </span>
              <span style={{ color: darkBlueTheme.colors.text.primary }}>
                {convertToPersian("1234567890")}
              </span>
              <div
                className="flex items-center gap-x-2 px-2 py-1 rounded-full"
                style={{
                  backgroundColor: `${darkBlueTheme.colors.status.success}20`,
                }}>
                <span
                  className="text-4xs p-1 rounded-full text-white"
                  style={{
                    backgroundColor: darkBlueTheme.colors.status.success,
                  }}>
                  <TiTick />
                </span>
                <span style={{ color: darkBlueTheme.colors.status.success }}>
                  تایید شده
                </span>
              </div>
            </div>

            {/* Birth Date */}
            <div className="flex items-center gap-6">
              <span style={{ color: darkBlueTheme.colors.text.secondary }}>
                تاریخ تولد
              </span>
              <span style={{ color: darkBlueTheme.colors.text.primary }}>
                {convertToPersian("1386/01/01")}
              </span>
              <div
                className="flex items-center gap-x-2 px-2 py-1 rounded-full"
                style={{
                  backgroundColor: `${darkBlueTheme.colors.status.error}20`,
                }}>
                <span
                  className="text-4xs p-1 rounded-full text-white"
                  style={{
                    backgroundColor: darkBlueTheme.colors.status.error,
                  }}>
                  <IoCloseOutline />
                </span>
                <span style={{ color: darkBlueTheme.colors.status.error }}>
                  تایید نشده
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bank data */}
      <div
        className="flex flex-col gap-x-3 gap-y-6 px-5 sm:px-7 py-5 lg:rounded-lg max-lg:border-b"
        style={panelBoxStyle}>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-3">
            <BiDollar
              className="font-bold text-3xl max-lg:text-md max-sm:text-base"
              style={{ color: darkBlueTheme.colors.primary.light }}
            />
            <TItlePanelBox> اطلاعات حساب بانکی</TItlePanelBox>
          </div>
          <button
            type="button"
            className="p-2 rounded-2xl flex gap-x-2 items-center cursor-pointer transition-colors hover:bg-action-hover"
            style={{ color: darkBlueTheme.colors.primary.light }}>
            <FaPencilAlt className="text-4xs" />
            <span>ویرایش اطلاعات</span>
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 items-center max-lg:grid-cols-1 gap-y-6 gap-x-3">
          {/* number shaba*/}
          <div className="flex items-center gap-6">
            <span style={{ color: darkBlueTheme.colors.text.secondary }}>
              شماره شبا
            </span>
            <span style={{ color: darkBlueTheme.colors.text.primary }}>
              {convertToPersian("0938123456712345678928489")}
            </span>
            <div
              className="flex items-center gap-x-2 px-2 py-1 rounded-full"
              style={{
                backgroundColor: `${darkBlueTheme.colors.status.success}20`,
              }}>
              <span
                className="text-4xs p-1 rounded-full text-white"
                style={{
                  backgroundColor: darkBlueTheme.colors.status.success,
                }}>
                <TiTick />
              </span>
              <span style={{ color: darkBlueTheme.colors.status.success }}>
                تایید شده
              </span>
            </div>
          </div>

          {/* number cart */}
          <div className="flex items-center gap-6">
            <span style={{ color: darkBlueTheme.colors.text.secondary }}>
              شماره حساب
            </span>
            <span style={{ color: darkBlueTheme.colors.text.primary }}>
              {convertToPersian("093812345671213213")}
            </span>
            <div
              className="flex items-center gap-x-2 px-2 py-1 rounded-full"
              style={{
                backgroundColor: `${darkBlueTheme.colors.status.error}20`,
              }}>
              <span
                className="text-4xs p-1 rounded-full text-white"
                style={{
                  backgroundColor: darkBlueTheme.colors.status.error,
                }}>
                <IoCloseOutline />
              </span>
              <span style={{ color: darkBlueTheme.colors.status.error }}>
                تایید نشده
              </span>
            </div>
          </div>

          {/* National Code */}
          <div className="flex items-center gap-6">
            <span style={{ color: darkBlueTheme.colors.text.secondary }}>
              شماره کارت
            </span>
            <span style={{ color: darkBlueTheme.colors.text.primary }}>
              {convertToPersian("1234567890")}
            </span>
            <div
              className="flex items-center gap-x-2 px-2 py-1 rounded-full"
              style={{
                backgroundColor: `${darkBlueTheme.colors.status.success}20`,
              }}>
              <span
                className="text-4xs p-1 rounded-full text-white"
                style={{
                  backgroundColor: darkBlueTheme.colors.status.success,
                }}>
                <TiTick />
              </span>
              <span style={{ color: darkBlueTheme.colors.status.success }}>
                تایید شده
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
