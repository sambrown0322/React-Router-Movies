import React from "react";
import { NavLink } from "react-router-dom";

const SavedList = (props) => (
  <NavLink to="/" className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie) => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button">Home</div>
  </NavLink>
);

export default SavedList;
