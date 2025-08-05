import { type JSX } from "react";
import {
  Header,
  Footer,
  TravelInsuranceHero,
  HeaderBoxTitle,
  Description,
} from "../index";

export const TravelInsurance = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div className="py-14">
        <TravelInsuranceHero />
        <div className=" py-8 px-12">
          <HeaderBoxTitle> بیمه مسافرتی</HeaderBoxTitle>
          <Description />
        </div>
      </div>
      <Footer />
    </div>
  );
};
