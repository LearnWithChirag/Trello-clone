import React, { useEffect, useRef, useState } from "react";
import "../CSS/Card.css";
import Task from "./Task";
import { Container, Draggable } from "react-smooth-dnd";
import { v4 as uuidv4 } from 'uuid';


const Card = (props) => {
  const { column, onCardDrop } = props;
  const cards = column.cards;

  const [showAddTask, setShowAddTask] = useState(false);
  const inputTaskRef = useRef(null);
  const [valueInputTask , setValueInputTask] = useState("");

  useEffect(() => {
    if(showAddTask === true && inputTaskRef && inputTaskRef.current){
      inputTaskRef.current.focus();
    }
  },[showAddTask]);

  const handleAddNewTask=() =>{
    if(!valueInputTask){
      inputTaskRef.current.focus();
      return;
    }
    const newCard = {
        id:uuidv4(),
        boardId: column.boardId,
        columnId: cards.columnId,
        title: valueInputTask,
        image: null
    }

    let newColumn = {...column};
    newColumn.cards = [...newColumn.cards, newCard];
    newColumn.cardOrder = newColumn.cards.map(card => card.id);
    setShowAddTask(newColumn);
    setValueInputTask("");
    inputTaskRef.current.focus();
  }

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
                <Task card={card} />
              </Draggable>
            );
          })}
      </Container>
      { showAddTask ?
      <div className="add-new-task">
        <input type="text" ref={inputTaskRef} value={valueInputTask} onChange={(e) => setValueInputTask(e.target.value)} />
        <div className="add-btn">
          <button onClick={()=> handleAddNewTask()}>Add Stage</button>
          <svg onClick={() => setShowAddTask(!showAddTask)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
      </div>
      :
      <footer onClick={() => setShowAddTask(!showAddTask)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
        Add Another Card
      </footer>
}
    </div>
  );
};

export default Card;
