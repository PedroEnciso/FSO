import React from "react";

const CountryList = ({ filteredCountries }) => {
  return (
    <div>
      {filteredCountries.map((country) => (
        <p key={country.ccn3}>{country.name.common}</p>
      ))}
    </div>
  );
};

export default CountryList;
