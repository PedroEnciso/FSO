import { useState } from "react";
import ShowPeople from "./components/ShowPeople";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";

function App() {
  const [persons, setPersons] = useState([
    { name: "poopoo", number: "5555555555" },
    { name: "Larry", number: "3604004000" },
    { name: "laser", number: "5555555555" },
    { name: "ped", number: "7605252738" },
  ]);
  const [peopleToDisplay, setPeopleToDisplay] = useState(persons);

  return (
    <div>
      <h1>phonebook</h1>
      <Search persons={persons} setPeopleToDisplay={setPeopleToDisplay} />
      <PersonForm persons={persons} setPersons={setPersons} />
      <ShowPeople persons={peopleToDisplay} />
    </div>
  );
}

export default App;
