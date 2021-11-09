import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/Note/NoteList";
import classes from "./App.module.css";
import Search from "./components/Search/Search";
import Button from "./components/UI/Button";

function App() {
  const [noteData, setNoteData] = useState([]);

  const [searchText, setSearchText] = useState("");

  const newInputDataHandler = (newtext) => {
    const now = new Intl.DateTimeFormat("en-uk", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(new Date());
    setNoteData((prevNote) => [
      {
        id: nanoid(),
        text: newtext,
        date: now,
      },
      ...prevNote,
    ]);
  };

  const deleteNoteHandler = (noteId) => {
    const newNotes = noteData.filter((note) => note.id !== noteId);
    setNoteData(newNotes);
  };

  // ====== GETTING DATA FROM THE LOCAL STORAGE ===========
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("react-note-data"));

    if (savedData) {
      setNoteData(savedData);
    }
  }, []);

  // === SAVING DATA TO THE LOCAL STORAGE ============
  useEffect(() => {
    localStorage.setItem("react-note-data", JSON.stringify(noteData));
  }, [noteData]);

  const deleteAllnotes = () => {
    localStorage.removeItem("react-note-data");
    setNoteData([]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Save Your Notes Here</h1>
        <Button className={classes.header_btn} onClick={deleteAllnotes}>
          Delete all
        </Button>
      </div>
      <Search onSearchNote={setSearchText} />
      <NoteList
        noteData={noteData.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        )}
        onNewDataInput={newInputDataHandler}
        onDeleteNote={deleteNoteHandler}
      />
    </div>
  );
}

export default App;
