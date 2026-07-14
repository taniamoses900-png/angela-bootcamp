import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText.trim() !== "") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }

  // Deletes an item by filtering it out using its array index ID
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="app-layout">
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', system-ui, sans-serif;
          background: linear-gradient(135deg, #d2ebd9 0%, #aed6b9 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .app-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .container {
          background-color: #ffffff;
          border-top: 10px solid #589669;
          padding: 35px 30px;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(40, 70, 50, 0.15);
          width: 100%;
          max-width: 380px;
          min-height: 420px;
          display: flex;
          flex-direction: column;
        }

        .heading h1 {
          color: #2b4c34;
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0 0 5px 0;
          letter-spacing: -0.5px;
          text-align: center;
        }

        .subtitle {
          color: #7da887;
          font-size: 0.95rem;
          margin-bottom: 25px;
          font-weight: 500;
          text-align: center;
        }

        .form {
          display: flex;
          gap: 12px;
          margin-bottom: 25px;
        }

        input {
          flex: 1;
          background-color: #f4f8f5;
          border: 2px solid #e1e9e3;
          border-radius: 8px;
          color: #2b4c34;
          font-size: 1.05rem;
          padding: 12px 16px;
          outline: none;
        }

        button {
          background-color: #589669;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          padding: 12px 24px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          flex-grow: 1;
        }

        li {
          background-color: #f4f8f5;
          border: 1px solid #e8f0ea;
          padding: 14px 16px;
          border-radius: 8px;
          margin-bottom: 10px;
          color: #2b4c34;
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: transform 0.1s ease;
        }

        li:hover {
          transform: scale(1.02);
          border-color: #ffb3b3;
          background-color: #fff5f5;
        }

        li::before {
          content: "🌸";
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .card-bottom-flowers {
          font-size: 12px;
          letter-spacing: 4px;
          opacity: 0.85;
          text-align: center;
          margin-top: auto;
          padding-top: 20px;
        }
      `}</style>

      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
          <div className="subtitle">Daily Tasks Overview</div>
        </div>
        
        <div className="form">
          <input 
            onChange={handleChange} 
            type="text" 
            value={inputText} 
            placeholder="What needs to be done?" 
          />
          <button onClick={addItem}>Add</button>
        </div>
        
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>

        <div className="card-bottom-flowers">
          🌸🌿🌸🌿🌸🌿🌸🌿🌸🌿🌸🌿🌸🌿🌸🌿🌸
        </div>
      </div>
    </div>
  );
}

export default App;

