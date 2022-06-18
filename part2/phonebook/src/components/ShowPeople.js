import React from "react";

const ShowPeople = ({ persons }) => {
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
  return (
    <div>
      <h2>numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {displayNumber(person.number)}
        </p>
      ))}
    </div>
  );
};

export default ShowPeople;
