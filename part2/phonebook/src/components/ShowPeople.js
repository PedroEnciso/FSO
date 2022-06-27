import React from "react";
import personService from "../services/persons";
import Message from "./Message";

const ShowPeople = ({
  peopleToDisplay,
  persons,
  setPersons,
  showMessage,
  message,
}) => {
  // function receives a number and returns a formatted phone number
  // xxxxxxxxxx => xxx-xxx-xxxx
  const displayNumber = (number) => {
    const formattedNumber =
      number.substring(0, 3) +
      "-" +
      number.substring(3, 6) +
      "-" +
      number.substring(6, number.length);
    return formattedNumber;
  };

  const deleteButton = (id, name) => {
    // confirm if user would like to delete
    const message = `would youlike to delete ${name} from the phonebook?`;
    if (!window.confirm(message)) {
      return;
    }
    // confirmed, delete user
    personService.deletePerson(id).then((response) => {
      const remainder = persons.filter((person) => {
        return person.id !== id;
      });
      setPersons(remainder);
      // show a message to confirm that a person has been added
      showMessage(`${name} has been deleted.`, "success");
    });
  };

  return (
    <div>
      <h2>numbers</h2>
      {peopleToDisplay.map((person) => (
        <div style={{ display: "flex", alignItems: "center" }} key={person.id}>
          <p>
            {person.name} {displayNumber(person.number)}
          </p>
          <button onClick={() => deleteButton(person.id, person.name)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowPeople;
