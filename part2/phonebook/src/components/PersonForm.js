import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import personService from "../services/persons";
import Message from "./Message";

const PersonForm = ({ persons, setPersons, showMessage, message }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [error, setError] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [numberIsValid, setNumberIsValid] = useState(false);

  useEffect(() => {
    if (newName === "") {
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

    // check if the name exists in db
    const duplicatePerson = checkForDuplicateName();
    // check if the function returned a person
    if (Object.keys(duplicatePerson).length !== 0) {
      // name exists, asks if user would like to edit person
      const message = `${newName} exists in the phonebook. Would you like to replace their existing number with this new number?`;
      if (window.confirm(message)) {
        // create the new person object to be added
        const newPerson = { ...duplicatePerson, number: newNumber };
        // update db with the new person
        personService
          .updatePerson(newPerson.id, newPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
            // show a message to confirm that a person has been updated
            showMessage(`${newPerson.name} has been updated.`, "success");
            // clear the form
            resetForm();
          })
          .catch((error) => {
            // show error message
            showMessage(
              `${newPerson.name} could not be updated. Please try refreshing the page.`,
              "error"
            );
          });
        return;
      } else {
        return;
      }
    }

    const person = {
      name: newName,
      number: newNumber,
    };

    personService
      .addPerson(person)
      .then((person) => {
        setPersons(persons.concat(person));
        // show a message to confirm that a person has been added
        showMessage(`${person.name} has been added!`, "success");
        resetForm();
      })
      .catch((error) => {
        console.log("could not add person to the server");
        console.log(error.message);
      });
  };

  // if there is a duplicate person, return the person
  // if no duplicate, return an empty object
  const checkForDuplicateName = () => {
    let duplicate = {};
    persons.forEach((person) => {
      if (person.name.toLowerCase() === newName.toLowerCase()) {
        duplicate = person;
      }
    });
    return duplicate;
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
      {typeof message.message !== "undefined" ? (
        <Message message={message.message} type={message.type} />
      ) : (
        ""
      )}
    </form>
  );
};

export default PersonForm;
