import { type JSX } from "react";

export const HeroTitle = (): JSX.Element => {
  return (
    <h1 className="lg:text-72 md:text-4xl sm:text-5xl    font-bold w-lg  ">
      دنیا را کشف کنید زندگی را <span className="text-blue-primary">تجربه</span>{" "}
      کنید 🛩️
    </h1>
  );
};
