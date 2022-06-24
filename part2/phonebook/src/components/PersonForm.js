import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import personService from "../services/persons";

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [error, setError] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [numberIsValid, setNumberIsValid] = useState(false);

  useEffect(() => {
    if (checkForDuplicateName()) {
      setError(`${newName} is already in the phonebook`);
      setNameIsValid(false);
    } else if (newName === "") {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
  }, [newName]);

  const handleNameChange = (event) => {
    if (setError !== "") {
      setError("");
    }
    setNewName(event.target.value);
  };

  // function that is run every time the user changes the number input
  // throws an error if the user input contains non-numbers or is longer then 10 digits
  // if the tests pass, display the new char in the input field
  const handleNumberChange = (event) => {
    // reset error message
    if (setError !== "") {
      setError("");
    }
    // store the new user input in a string and as an array
    const userInput = event.target.value;
    const inputArray = userInput.split("");
    // check if the input contains a letter
    // true: show error and return without showing the char
    if (checkForLetters(inputArray)) {
      setError("Only numbers are allowed");
      return;
    }
    // check if the input would be more than 10 digits
    // true: show error and return without showing the char
    // check if input is would be less than 10 digits
    // true: disable button
    if (inputArray.length > 10) {
      setError("Only 10 digits are allowed");
      return;
    } else if (inputArray.length < 10) {
      setNumberIsValid(false);
    } else {
      // new number has 10 digits, set the input as valid
      setNumberIsValid(true);
    }
    // all tests pass, add inputted char to the array
    setNewNumber(userInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (setError !== "") {
      setError("");
    }
    const person = {
      name: newName,
      number: newNumber,
    };

    personService
      .addPerson(person)
      .then((person) => {
        setPersons(persons.concat(person));
        resetForm();
      })
      .catch((error) => {
        console.log("could not add person to the server");
        console.log(error.message);
      });
  };

  const checkForDuplicateName = () => {
    let hasDuplicateValue = false;
    persons.forEach((person) => {
      if (person.name.toLowerCase() === newName.toLowerCase()) {
        hasDuplicateValue = true;
        return;
      }
    });
    return hasDuplicateValue;
  };

  // checks if a string has non-integer chars
  // returns true if there are non-integer chars in the string
  // returns false if there are only integers in the array
  const checkForLetters = (userInput) => {
    const letters = userInput.filter((input) => {
      if (isNaN(parseInt(input))) {
        return input;
      }
    });
    if (letters.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const evaluateDisabledButton = () => {
    if (nameIsValid && numberIsValid) {
      return false;
    } else {
      return true;
    }
  };

  // function resets all form elements after submit
  const resetForm = () => {
    setNewName("");
    setNewNumber("");
    setNameIsValid(false);
    setNumberIsValid(false);
  };

  return (
    <form>
      <h2>Add a new person</h2>
      <InputField
        type="text"
        label="name"
        value={newName}
        handler={handleNameChange}
      />

      <InputField
        type="tel"
        label="phone number"
        value={newNumber}
        handler={handleNumberChange}
      />
      <div>
        <button
          disabled={evaluateDisabledButton()}
          type="submit"
          onClick={handleSubmit}
        >
          add
        </button>
      </div>
      <p style={{ color: "red" }}>{error}</p>
    </form>
  );
};

export default PersonForm;
