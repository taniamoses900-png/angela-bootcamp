import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #d2ebd9 0%, #aed6b9 100%);
          min-height: 100vh;
        }
        header {
          background-color: #589669;
          margin: 0 auto;
          padding: 16px 32px;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        }
        header h1 {
          color: #fff;
          font-family: "McLaren", cursive;
          font-weight: 200;
          margin: 0;
        }
        footer {
          position: absolute;
          text-align: center;
          bottom: 0;
          width: 100%;
          height: 2.5rem;
        }
        footer p {
          color: #7da887;
        }
        form.create-note {
          position: relative;
          width: 480px;
          margin: 30px auto 20px auto;
          background: #fff;
          padding: 15px;
          border-radius: 7px;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
        }
        form.create-note input, form.create-note textarea {
          width: 100%;
          border: none;
          padding: 4px;
          outline: none;
          font-size: 1.2rem;
          font-family: inherit;
          resize: none;
        }
        form.create-note button {
          position: absolute;
          right: 18px;
          bottom: -18px;
          background: #589669;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          outline: none;
        }
        .note {
          background: #fff;
          border-radius: 7px;
          box-shadow: 0 2px 5px #ccc;
          padding: 10px;
          width: 240px;
          margin: 16px;
          float: left;
        }
        .note h1 {
          font-size: 1.1em;
          margin-bottom: 6px;
          color: #2b4c34;
        }
        .note p {
          font-size: 1.1em;
          margin-bottom: 10px;
          white-space: pre-wrap;
          color: #333;
        }
        .note button {
          position: relative;
          float: right;
          background: none;
          border: none;
          color: #965858;
          cursor: pointer;
          outline: none;
        }
      `}</style>

      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
