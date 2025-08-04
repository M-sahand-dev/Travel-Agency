import { useEffect, useState, type JSX } from "react";
import { AboutDiscription, Footer, Header, Preloader } from "../index";

export const AboutUs = (): JSX.Element => {
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
    <div className="about-us">
      <Header />
      <div className=" container mx-auto pt-14">
        <AboutDiscription />
      </div>
      <Footer />
    </div>
  );
};
