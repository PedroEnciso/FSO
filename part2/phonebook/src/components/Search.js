import React, { useState, useEffect } from "react";
import InputField from "./InputField";

const Search = ({ persons, setPeopleToDisplay }) => {
  const [newSearch, setNewSearch] = useState("");

  // everytime newSearch changes, search through phonebook for matches
  useEffect(() => {
    const searchedPeople = persons.filter((person) => {
      return person.name.toLowerCase().includes(newSearch.toLowerCase());
    });
    setPeopleToDisplay(searchedPeople);
  }, [newSearch]);

  const handleNewSearch = (event) => {
    setNewSearch(event.target.value);
  };

  return (
    <form>
      <InputField
        type="text"
        label="filter names"
        value={newSearch}
        handler={handleNewSearch}
      />
    </form>
  );
};

export default Search;
