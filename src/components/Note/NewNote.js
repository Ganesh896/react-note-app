import React, { useState } from "react";
import classes from "./NewNote.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Footer from "../UI/Footer";

const NewNote = ({ onDataSaved }) => {
  const [inputText, setInputText] = useState("");
  const wordCount = 250;

  const inputTextHandler = (e) => {
    if (wordCount - e.target.value.length >= 0) {
      setInputText(e.target.value);
    }
  };

  const saveNoteHandler = (e) => {
    e.preventDefault();
    onDataSaved(inputText);
    setInputText("");
  };

  return (
    <Card className={classes.new_note}>
      <textarea
        cols="8"
        rows="10"
        placeholder="Type your text here..."
        value={inputText}
        onChange={inputTextHandler}
      />
      <Footer>
        <p>{wordCount - inputText.length} Remaining</p>
        <Button onClick={saveNoteHandler}>Save</Button>
      </Footer>
    </Card>
  );
};

export default NewNote;
