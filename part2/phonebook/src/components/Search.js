import React, { useState, useEffect } from "react";
import InputField from "./InputField";

const Search = ({ persons, setPeopleToDisplay, newFilter, setNewFilter }) => {
  // everytime newFilter changes, search through phonebook for matches
  useEffect(() => {
    const searchedPeople = persons.filter((person) => {
      return person.name.toLowerCase().includes(newFilter.toLowerCase());
    });
    setPeopleToDisplay(searchedPeople);
  }, [newFilter]);

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <form>
      <InputField
        type="text"
        label="filter names"
        value={newFilter}
        handler={handleNewFilter}
      />
    </form>
  );
};

export default Search;
