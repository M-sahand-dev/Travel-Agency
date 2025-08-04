import { type JSX, useEffect, useState } from "react";
import { Footer, Header } from "../index";
import { ProductDetails, ProductTour } from "./index";
import { Preloader } from "../ui"; // Adjust the path if necessary

export const DetailPage = (): JSX.Element => {
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
    <div className="">
      <Header />
      <div className="py-20 px-12 container mx-auto">
        <ProductDetails />
        <ProductTour />
      </div>
      <Footer />
    </div>
  );
};
