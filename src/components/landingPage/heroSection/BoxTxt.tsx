import { type JSX } from "react";

export const BoxTxt = (): JSX.Element => {
  return (
    <div className="flex p-4 items-center gap-2 border border-orange-secondary w-64 bg-orange-tertiary text-center rounded-4xl">
      🌅
      <span className="font-bold text-sm text-orange-primary">
        بسیار سفر باید تا پخته شود خامی
      </span>
    </div>
  );
};
