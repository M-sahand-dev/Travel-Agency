import { useEffect, useState, type JSX } from "react";
import { motion } from "framer-motion";

export const Preloader = (): JSX.Element => {
  const [, setIsDarkMode] = useState(false);
  const savedTheme = () => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  };

  useEffect(() => {
    savedTheme();
  }, []);
  return (
    <motion.div
      id="preloader"
      className="fixed inset-0 dark:bg-dark-primary bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.div
        className="rounded-full border-4 border-t-4  border-gray-quaternary h-12 w-12"
        animate={{
          rotate: 360,
          borderTopColor: "#3B82F6",
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          },
          borderTopColor: {
            repeat: Infinity,
            duration: 2,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
    </motion.div>
  );
};
