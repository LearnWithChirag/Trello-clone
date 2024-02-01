import React, { useState, useEffect} from "react";
import "./CSS/App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { InitialData } from "./Components/InitialData";
import { Container, Draggable } from "react-smooth-dnd";
import _, { drop } from "lodash";
import { applyDrag } from "./Components/Dnd";

function App() {
  const [board, setBoard] = useState({});
  const [card, setCard] = useState([]);

  useEffect(() => {
    const initialData = InitialData.boards.find((item) => item.id === "board1");
    if (initialData) {
      setBoard(initialData);
      setCard(initialData.columns);
    }
  }, []);

  const onColumnDrop = (dropResult) => {
    // console.log(">>> inside onColumnDrop", dropResult);
    let newCard = [...card];
    newCard = applyDrag(newCard, dropResult);
    // console.log("newcolumn", newColumns);
    let newBoard = {...board};
    newBoard.columnOrder = newCard.map(column => column.id);
    newBoard.columns = newCard;

    setCard(newCard);
    setBoard(newBoard);
  };

  const onCardDrop = (dropResult, columnId) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      console.log(">>> inside onCardDrop:", dropResult);

    let newCard = [...card];
      let currentColumn = newCard.find(column => column.id === columnId);
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map(card => card.id)

      setCard(newCard)
;    }
  };

  if (_.isEmpty(board)) {
    return (
      <>
        <div className="not-found">Board not found</div>
      </>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <div className="cards">
        <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          getChildPayload={index => card[index]}
          dragHandleSelector=".column-drag-handle" 
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "cards-drop-preview",
          }}
        >
          {card &&
            card.length > 0 &&
            card.map((column, index) => {
              return (
                <Draggable key={column.id}>
                  <Card  column={column} onCardDrop={onCardDrop}/>
                </Draggable>
              );
            })}
        </Container>
        <div className="new-card">
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        Add New Card</span>
        </div>
      </div>
    </div>
  );
}

export default App;
