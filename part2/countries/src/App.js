import { useState, useEffect } from "react";
import axios from "axios";
import CountryFilter from "./components/CountryFilter";
import CountryDisplay from "./components/CountryDisplay";

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
      <CountryDisplay filteredCountries={filteredCountries} />
    </div>
  );
}

export default App;
