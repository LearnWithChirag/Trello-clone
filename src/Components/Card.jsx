import React from "react";
import "../CSS/Card.css";
import Task from "./Task";
import { Container, Draggable } from "react-smooth-dnd";

const Card = (props) => {
  const { column , onCardDrop} = props;
  const cards = column.cards;
  

  return (
    <div className="card">
      <header className="column-drag-handle">
        {column.title} <b>-</b>
      </header>

      <Container
        groupName="col"
        onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
        getChildPayload={(index) => cards[index]}
        dragClass="card-ghost"
        dropClass="card-ghost-drop"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "drop-preview",
        }}
        dropPlaceholderAnimationDuration={200}
      >
        {cards &&
          cards.length > 0 &&
          cards.map((card) => {
            return (
              <Draggable key={card.id}>
                <Task card={card}  />
              </Draggable>
            );
          })}
      </Container>
      <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        Add Another Card
      </footer>
    </div>
  );
};

export default Card;
