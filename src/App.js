import React from 'react';
import './CSS/App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
// import Card from './Components/DoingCard';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="cards">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      </div>
    </div>
  );
}

export default App;
