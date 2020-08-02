import React from "react";
import currencyFormatter from "currency.js";
export const Currency = ({ language, country, amount, currency }) => {

  const cur = currencyFormatter(amount, { fromCents: true })

  return (
    <span>
      {new Intl.NumberFormat(`${language}-${country}`, {
        style: "currency",
        currency,
        // @ts-ignore
      }).format(cur)}
    </span>
  );
};
