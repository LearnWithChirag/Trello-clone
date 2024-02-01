import React from "react";
import '../CSS/Card.css';
import Task from "./Task";

const Card = () => {
  return (
    <div className="card">
      <header>To Do <b>-</b></header>
      <Task />
      <footer>Add Another Card</footer>
    </div>
  );
};

export default Card;
