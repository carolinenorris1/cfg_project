import React, { useContext } from "react";
import CountryContext from "../../context/CountryContext";

function PremiumContent() {
  const context = useContext(CountryContext);
  const country = context.country;

  function getPremiumPrice(country) {
    let premiumPrice;

    if (country === "UK") {
      premiumPrice = "£2.99/month";
    } else if (country === "US") {
      premiumPrice = "$4.99/month";
    } else if (country === "EU") {
      premiumPrice = "€3.99/month";
    } else {
      premiumPrice = "*no region selected*";
    }
    return premiumPrice;
  }
  return (
    <div>
      <p>Want to discover even more great features?</p>
      <p>
        For just <b>{getPremiumPrice(country)}</b>, you can unlock even more
        tools to help you <b>UnHook</b>.
      </p>
    </div>
  );
}

export default PremiumContent;
