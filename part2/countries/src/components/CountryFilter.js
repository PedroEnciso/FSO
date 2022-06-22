import React, { useState, useEffect } from "react";

const CountryFilter = ({
  countries,
  filteredCountries,
  setFilteredCountries,
}) => {
  const [userFilter, setUserFilter] = useState("");
  const inputHandler = (event) => {
    setUserFilter(event.target.value.toLowerCase());
  };

  const filterCountries = () => {
    const filtered = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(userFilter);
    });
    setFilteredCountries(filtered);
  };

  useEffect(filterCountries, [userFilter]);

  return (
    <div>
      filter countries:
      <input type="text" onChange={inputHandler} value={userFilter} />
    </div>
  );
};

export default CountryFilter;
