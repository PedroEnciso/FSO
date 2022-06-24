import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    noteService
      .getAllNotes()
      .then((allNotes) => setNotes(allNotes))
      .catch((error) => console.log("could not get notes from the server"));
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    noteService.createNote(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const toggleImportance = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.updateNote(id, changedNote).then((updatedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : updatedNote)));
    });
  };

  const handleInput = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <div>
      {notes.map((note) => {
        return (
          <Note
            note={note}
            toggleImportance={() => toggleImportance(note.id)}
            key={note.id}
          />
        );
      })}
      <form>
        add note: <input type="text" onChange={handleInput} value={newNote} />
        <button onClick={addNote}>add note</button>
      </form>
    </div>
  );
}

export default App;
