import { useId, useState, type JSX } from "react";
import { travelInsuranceData } from "../../constants";
import { IoIosArrowDown } from "react-icons/io";

export const Description = (): JSX.Element => {
  const id = useId();
  const [showMore, setShowMore] = useState<string | null>(null);

  const handelShowMore = (question: string) => {
    setShowMore(showMore === question ? null : question);
  };
  const paragraphs =
    travelInsuranceData.whatIsInsurance.description.split("\n");
  return (
    <div className=" py-8">
      <div className="flex items-center justify-between gap-8 max-lg:flex-wrap max-lg:gap-4 max-lg:justify-center">
        <div className="w-[600px] mb-4 flex flex-col justify-center gap-4">
          <h2 className="font-black text-3xl ">
            {travelInsuranceData.mainBanner.title}
          </h2>
          <p className=" leading-9 text-base text-justify">
            {travelInsuranceData.mainBanner.description}
          </p>
        </div>
        <img
          src={travelInsuranceData.mainBanner.image}
          className="w-[600px] h-[600px] dark:hidden  max-lg:w-[400px] max-lg:h-[400px] max-md:w-[300px] max-md:h-[300px]"
          alt=""
        />
        <img
          src={
            "/image/travel-insurance/ChatGPT Image Aug 5, 2025, 04_17_29 PM.png"
          }
          className="w-[600px] h-[600px] dark:block hidden rounded-2xl max-lg:w-[400px] max-lg:h-[400px] max-md:w-[300px] max-md:h-[300px]"
          alt=""
        />
      </div>
      <div className="py-8 max-lg:justify-center">
        <h2 className="font-black text-3xl ">
          {travelInsuranceData.services.title}
        </h2>
        <p className=" my-4 leading-9 text-base text-justify">
          {travelInsuranceData.services.description}
        </p>
        <div className="flex justify-between flex-wrap max-lg:justify-center">
          {travelInsuranceData.services.coverages.map((item) => (
            <div key={id + item.title} className="flex">
              {typeof item.icon === "string" ? (
                <img src={item.icon} alt={item.title} />
              ) : item.icon ? (
                <span aria-label={item.title}>
                  {typeof item.icon === "function" ? <item.icon /> : null}
                </span>
              ) : null}
              <div className="flex gap-4 flex-col  p-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-dark-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 flex max-lg:flex-wrap gap-8  max-lg:justify-center">
        <img
          src={travelInsuranceData.whatIsInsurance.image}
          alt={travelInsuranceData.whatIsInsurance.title}
          className="w-[600px] h-[600px] rounded-2xl max-lg:w-[400px] max-lg:h-[400px] max-md:w-[300px] max-md:h-[300px] text-center"
        />
        <div className="mb-4 flex flex-col justify-center gap-4">
          <h2 className="font-black text-3xl ">
            {travelInsuranceData.whatIsInsurance.title}
          </h2>
          {paragraphs.map((para, index) => (
            <p key={index} className=" leading-9 text-base text-justify">
              {para}
            </p>
          ))}
        </div>
      </div>
      <div className="py-4 flex max-lg:flex-wrap gap-8 items-center">
        <div className=" flex flex-col gap-4">
          <h2 className="font-black text-3xl ">
            {travelInsuranceData.purchaseInfo.title}
          </h2>
          <p className=" leading-9 text-base text-justify">
            {travelInsuranceData.purchaseInfo.description}
          </p>
          <p className=" leading-9 text-base text-justify">
            بیمه های مسافرتی خدمات متنوعی به مسافران ارائه می‌کنند، برای مثال:
          </p>
          <div className=" grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 ">
            {travelInsuranceData.purchaseInfo.coverages.map((coverage) => (
              <div key={coverage.title} className="flex items-center gap-2">
                {typeof coverage.icon === "string" ? (
                  <img src={coverage.icon} alt={coverage.title} />
                ) : coverage.icon ? (
                  <span
                    aria-label={coverage.title}
                    className="p-4 bg-blue-quaternary text-white rounded-5xl">
                    {typeof coverage.icon === "function" ? (
                      <coverage.icon />
                    ) : null}
                  </span>
                ) : null}
                <span className=" text-4xs w-28">{coverage.title}</span>
              </div>
            ))}
          </div>
          <p className=" leading-9 text-base text-justify">
            {travelInsuranceData.purchaseInfo.note}
          </p>
        </div>
        <img
          src={travelInsuranceData.purchaseInfo.image}
          alt={travelInsuranceData.purchaseInfo.title}
          className="w-[600px] h-[600px] rounded-2xl max-lg:w-[400px] max-lg:h-[400px] max-md:w-[300px] max-md:h-[300px] max-lg:hidden"
        />
      </div>
      <div className="py-14 flex flex-col items-center ">
        <h2 className="font-black text-3xl ">
          {travelInsuranceData.pricingFactors.title}
        </h2>
        <p className=" leading-9 text-base text-justify">
          {travelInsuranceData.pricingFactors.description}
        </p>
        <div className=" flex justify-between gap-8 max-lg:flex-wrap max-lg:gap-4 max-lg:justify-center">
          {travelInsuranceData.pricingFactors.factors.map((pricingFactor) => (
            <div
              key={pricingFactor.title}
              className="flex flex-col gap-4 items-center w-96 text-center">
              <img src={pricingFactor.image} alt={pricingFactor.title} />
              <h3 className="">{pricingFactor.title}</h3>
              <p className=" leading-9 text-base  text-center">
                {pricingFactor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-14 flex flex-col gap-6">
        <h2 className="font-black text-3xl ">
          {travelInsuranceData.calculationMethod.title}
        </h2>
        <p className=" leading-9 text-base text-justify">
          {travelInsuranceData.calculationMethod.description}
        </p>
        <div className="overflow-hidden rounded-xl shadow-[var(--shadow-md)] border border-[var(--grays-300)]">
          <table className="w-full border-collapse ">
            <thead>
              <tr className="bg-[var(--secondary-100)]">
                {travelInsuranceData.calculationMethod.table.headers.map(
                  (header, index) => (
                    <th
                      key={header}
                      className={`
              p-4 text-right font-semibold text-[var(--secondary-500)]
              border-b border-[var(--secondary-300)]
              ${
                index === 0
                  ? "rounded-tr-xl border-l border-[var(--grays-300)] pr-6"
                  : "rounded-tl-xl border-r border-[var(--grays-300)] pl-6"
              }
            `}>
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {travelInsuranceData.calculationMethod.table.rows.map(
                (row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`
            border-b border-[var(--grays-300)] last:border-b-0
            ${rowIndex % 2 === 0 ? "" : "bg-[var(--gray-100)]"}
            hover:bg-[var(--secondary-100)]
            transition-colors duration-150
          `}>
                    <td className="p-5 font-medium text-[var(--grays-700)] place-items-center align-top w-[35%] border-l border-[var(--grays-300)] pr-6">
                      <span className="flex items-center justify-center gap-2 w-full h-full">
                        {/* <span className="w-2 h-2 rounded-full bg-[var(--secondary-400)]"></span> */}
                        {row.factor}
                      </span>
                    </td>
                    <td className="p-5 text-[var(--grays-600)] align-top border-r border-[var(--grays-300)] pl-6">
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {row.calculation.split("•").map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center py-1 px-3 rounded-lg bg-[var(--gray-100)] text-[var(--grays-600)] text-sm">
                            {item.trim()}
                          </span>
                        ))}
                      </div>
                      {row.factor === "سن مسافر" && (
                        <p className="mt-3 text-[var(--grays-400)] text-sm italic">
                          (خیلی از شرکت‌های بیمه ممکن است به افراد بالای ۸۰ یا
                          ۸۵ سال، بیمه مسافرتی ارائه نکنند.)
                        </p>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <p className=" leading-9 text-base text-justify">
          {travelInsuranceData.calculationMethod.note}
        </p>
      </div>
      <div className="">
        <h2 className="font-black text-3xl py-8">
          {travelInsuranceData.faqs.title}
        </h2>
        <div className="flex flex-col gap-6">
          {travelInsuranceData.faqs.items.map((faq, i) => (
            <div
              key={id + i}
              className="border border-dark-secondary p-6 rounded-2xl cursor-pointer">
              <div
                onClick={() => handelShowMore(faq.question)}
                className="flex justify-between gap-4 items-center text-2xl">
                <h3>{faq.question}</h3>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ease-in-out ${
                    showMore === faq.question ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showMore === faq.question
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <p className="pt-4 leading-9 text-base text-dark-glass-contrast-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
