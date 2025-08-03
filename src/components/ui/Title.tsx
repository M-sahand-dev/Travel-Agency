import type { JSX } from "react";
import { Link } from "react-router-dom";

export const Title = (): JSX.Element => {
  return (
    <Link
      className="flex gap-1 font-Rokh font-black pr-0.5 items-center"
      to="/">
      <img src={"../../../public/image/Vector.png"} className="w-5 h-5" />
      <span className="text-2xl text-dark-secondary dark:text-white">
        سفرکن
      </span>
    </Link>
  );
};
