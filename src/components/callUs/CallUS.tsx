import { useEffect, useState, type JSX } from "react";
import { Header, Footer, Preloader, HeaderBoxTitle } from "../index";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export const CallUs = (): JSX.Element => {
  // Loading state control
  const [loading, setLoadig] = useState(true);
  const fetchingData = async () => {
    return new Promise<void>((resolve) => {
      const timer = setTimeout(() => {
        setLoadig(false);
        resolve();
      }, 2000); // 2 seconds delay

      // Cleanup function to prevent memory leaks
      return () => clearTimeout(timer);
    });
  };
  useEffect(() => {
    fetchingData();
    // Add 'loaded' class to body when loading completes
    if (!loading) {
      document.body.classList.add("loaded");
    }
  }, [loading]);
  return loading ? (
    <Preloader />
  ) : (
    <div className="call-us">
      <Header />
      <div className=" container mx-auto pt-14 h-screen grid place-items-center">
        <div className="p-8 shadow-2xl border border-dark-secondary rounded-4xl">
          <div className=" flex flex-col  space-y-4">
            <HeaderBoxTitle>تماس با ما</HeaderBoxTitle>
            <p>
              سوال یا درخواستی دارید؟ در همه‌ی روزهای هفته و در هر ساعت از
              شبانه‌روز که بخواهید، می‌توانید از طریق راه‌های زیر با ما ارتباط
              بگیرید.
            </p>
          </div>
          <div className="mt-10 flex  justify-evenly">
            <div className="*:flex *:items-center *:gap-2 flex flex-col gap-4">
              <a href="#">
                <BsInstagram />
                <span>اینستگرام سفر کن</span>
              </a>
              <a href="#">
                <BsInstagram />
                <span>اینستگرام سفر کن</span>
              </a>
              <a href="#">
                <BsInstagram />
                <span>اینستگرام سفر کن</span>
              </a>
              <a href="#">
                <BsInstagram />
                <span>اینستگرام سفر کن</span>
              </a>
            </div>
            <div className=" border border-dark-secondary"></div>
            <div className="flex flex-col gap-6">
              <div className="">
                <div className="flex items-center text-xl font-bold">
                  {" "}
                  <CiLocationOn />
                  <span>آدرس دفتر حضوری</span>
                </div>
                <p className="mt-4">
                  {" "}
                  خیابان شهید برادران سلیمانی غربی، کوچه شهیدمحمدحسین بلوچ
                  شمالی، پلاک 4 ،طبقه 1
                </p>
              </div>
              <div className="">
                <div className="flex items-center text-xl font-bold">
                  {" "}
                  <CiLocationOn />
                  <span>آدرس دفتر حضوری</span>
                </div>
                <p className="mt-4">
                  {" "}
                  خیابان شهید برادران سلیمانی غربی، کوچه شهیدمحمدحسین بلوچ
                  شمالی، پلاک 4 ،طبقه 1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
