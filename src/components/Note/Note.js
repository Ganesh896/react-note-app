import React from "react";
import classes from "./Note.module.css";
import { MdDelete } from "react-icons/md";
import Card from "../UI/Card";
import Footer from "../UI/Footer";

const Note = ({ id, text, date, onDelete }) => {
  return (
    <Card className={classes.note}>
      <p>{text}</p>
      <Footer>
        <span>{date}</span>
        <MdDelete
          className={classes.delete_icon}
          size="1.3em"
          onClick={() => onDelete(id)}
        />
      </Footer>
    </Card>
  );
};

export default Note;
