import React from "react";

const Note = ({ note, toggleImportance }) => {
  const label = note.imortant ? "make not important" : "make important";
  return (
    <div>
      {note.important ? (
        <p>
          <strong>{note.content}</strong>
        </p>
      ) : (
        <p>{note.content}</p>
      )}

      <p>
        <small>{note.date}</small>
      </p>
      <button onClick={toggleImportance}>{label}</button>
      <hr />
    </div>
  );
};

export default Note;
