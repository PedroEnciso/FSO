import React from "react";

const CountryList = ({ filteredCountries }) => {
  return (
    <div>
      {filteredCountries.map((country) => (
        <p key={country.name.common}>{country.name.common}</p>
      ))}
    </div>
  );
};

export default CountryList;
