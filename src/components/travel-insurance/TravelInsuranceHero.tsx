import { type JSX } from "react";
import { SearchBar, SearchBarResponsive } from "../index";

export const TravelInsuranceHero = (): JSX.Element => {
  return (
    <div className="relative bg-[url('/image/hotel/light-Hotel.webp')] dark:bg-[url('/image/hotel/dark-Hotel.png')] bg-no-repeat bg-cover bg-center  p-28">
      <SearchBar />
      <SearchBarResponsive />
    </div>
  );
};
