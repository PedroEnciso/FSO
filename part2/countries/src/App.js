import { useState, useEffect } from "react";
import axios from "axios";
import CountryFilter from "./CountryFilter";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const fetchData = () => {
    axios.get("http://localhost:3001/countries").then((response) => {
      setCountries(response.data);
      setFilteredCountries(response.data);
    });
  };
  useEffect(fetchData, []);

  return (
    <div>
      <h1>Countries</h1>
      <CountryFilter
        countries={countries}
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
      />
    </div>
  );
}

export default App;
