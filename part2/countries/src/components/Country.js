import React from "react";

const Country = ({ country }) => {
  const languages = [];
  for (const [key, lang] of Object.entries(country.languages)) {
    languages.push(lang);
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>
      <p>
        <strong>languages:</strong>
      </p>
      <ul>
        {languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={"flag of " + country.name.common} />
    </div>
  );
};

export default Country;
