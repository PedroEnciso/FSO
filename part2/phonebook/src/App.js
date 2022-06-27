import { useState, useEffect } from "react";
import ShowPeople from "./components/ShowPeople";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [peopleToDisplay, setPeopleToDisplay] = useState(persons);
  const [newFilter, setNewFilter] = useState("");
  const [message, setMessage] = useState({ messege: "", type: "" });

  const fetchData = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  // function to create an error message
  // takes in a message and a type: success or error
  // uses setMEssage to show a message for 4 seconds
  const showMessage = (confMessage, type) => {
    const newMessage = {
      message: confMessage,
      type: type,
    };
    setMessage(newMessage);
    setTimeout(() => {
      setMessage({ messege: "", type: "" });
    }, 4000);
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
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        showMessage={showMessage}
        message={message}
      />
      <ShowPeople
        peopleToDisplay={peopleToDisplay}
        persons={persons}
        setPersons={setPersons}
        showMessage={showMessage}
        message={message}
      />
    </div>
  );
}

export default App;
