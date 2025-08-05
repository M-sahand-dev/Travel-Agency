import { type JSX } from "react";
import { SearchBar, SearchBarResponsive } from "../index";

export const InternalTourHero = (): JSX.Element => {
  return (
    <div className="relative bg-[url('/public/image/hotel/light-Hotel.webp')] dark:bg-[url('/public/image/hotel/dark-Hotel.png')] bg-no-repeat bg-cover bg-center  p-28">
      <SearchBar />
      <SearchBarResponsive />
    </div>
  );
};
