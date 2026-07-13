import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unstrike() {
  isDone = false;
}

function App() {
  return (
    <div className="container">
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unstrike}>Change back</button>
    </div>
  );
}

export default App;
