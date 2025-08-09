export function toPersianNumber(num: number) {
  return new Intl.NumberFormat("fa-IR").format(num);
}

export function convertToPersian(
  input: string | number | bigint,
  options: { formatNumbers?: boolean } = { formatNumbers: true }
): string {
  if (typeof input === "number" || typeof input === "bigint") {
    return options.formatNumbers
      ? new Intl.NumberFormat("fa-IR").format(input)
      : input.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
  }
  return input.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
}
