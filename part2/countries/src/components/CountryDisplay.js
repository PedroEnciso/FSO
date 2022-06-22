import React from "react";
import CountryList from "./CountryList";
import Country from "./Country";

const CountryDisplay = ({ filteredCountries }) => {
  const chooseDisplay = () => {
    if (filteredCountries.length === 1) {
      return <Country country={filteredCountries[0]} />;
    } else if (filteredCountries.length === 0) {
      return <p>No countries match this filter.</p>;
    } else if (filteredCountries.length > 10) {
      return <p>More than 10 countries, specify another filter.</p>;
    } else {
      return <CountryList filteredCountries={filteredCountries} />;
    }
  };
  return <div>{chooseDisplay()}</div>;
};

export default CountryDisplay;
