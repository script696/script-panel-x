export const AVAILABLE_CURRENCY = { RUB: "RUB", USD: "USD" };

const ISO_TO_VIEW_CURRENCY = {
  RUB: "₽",
  USD: "$",
} as const;

export const MIN_AVAILABLE_PRICE_RUB = 150;
export const MIN_AVAILABLE_PRICE_USD = 3;

type GetNumberWithCurrencyParams = {
  number: number;
  currency: keyof typeof AVAILABLE_CURRENCY;
};

export const getNumberWithCurrency = ({ number, currency }: GetNumberWithCurrencyParams): string => {
  return number + ISO_TO_VIEW_CURRENCY[currency];
};
