import { useState, useEffect } from "react";
import ShowPeople from "./components/ShowPeople";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [peopleToDisplay, setPeopleToDisplay] = useState(persons);
  const [newFilter, setNewFilter] = useState("");

  const fetchData = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };

  useEffect(fetchData, []);

  // if a person is ever added, reset search filter and display all names
  useEffect(() => {
    setPeopleToDisplay(persons);
    setNewFilter("");
  }, [persons]);
  return (
    <div>
      <h1>phonebook</h1>
      <Search
        persons={persons}
        setPeopleToDisplay={setPeopleToDisplay}
        newFilter={newFilter}
        setNewFilter={setNewFilter}
      />
      <PersonForm persons={persons} setPersons={setPersons} />
      <ShowPeople persons={peopleToDisplay} />
    </div>
  );
}

export default App;
