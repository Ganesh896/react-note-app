import React from "react";
import NewNote from "./NewNote";
import Note from "./Note";
import classes from "./NoteList.module.css";

const NoteList = ({ onNewDataInput, noteData, onDeleteNote }) => {
  const textData = (text) => {
    if (text.trim().length > 0) {
      onNewDataInput(text);
    }
  };

  return (
    <div className={classes.note_list}>
      {noteData.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          onDelete={onDeleteNote}
        />
      ))}
      <NewNote onDataSaved={textData} />
    </div>
  );
};

export default NoteList;
