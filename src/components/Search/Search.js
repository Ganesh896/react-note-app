import React from "react";
import { BsSearch } from "react-icons/bs";
import classes from "./Search.module.css";

const Search = (props) => {
  return (
    <div className={classes.search}>
      <input
        type="text"
        placeholder="Search your note here..."
        onChange={(event) => props.onSearchNote(event.target.value)}
      />
      <div className={classes.search_icon}>
        <BsSearch />
      </div>
    </div>
  );
};

export default Search;
