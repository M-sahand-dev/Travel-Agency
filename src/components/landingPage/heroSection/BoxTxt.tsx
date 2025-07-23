import { type JSX } from "react";

export const BoxTxt = (): JSX.Element => {
  return (
    <div className="flex p-4 items-center gap-2 border border-orange-secondary lg:w-64 w-56 bg-orange-tertiary text-center rounded-4xl">
      🌅
      <span className="font-bold lg:text-sm text-3xs text-orange-primary">
        بسیار سفر باید تا پخته شود خامی
      </span>
    </div>
  );
};
