import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      {/* This forces the layout and midnight-blue gradient directly onto the page */}
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%) !important;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          text-align: center;
          width: 100%;
          max-width: 320px;
        }
        h1 {
          color: #ffffff;
          font-weight: 300;
          font-size: 3.2rem;
          margin-bottom: 25px;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        input {
          background-color: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 6px;
          color: #ffffff;
          font-size: 1.1rem;
          padding: 14px;
          margin-bottom: 14px;
          text-align: center;
          outline: none;
        }
        input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        button {
          background: linear-gradient(135deg, #00b4db 0%, #0083b0 100%);
          border: none;
          border-radius: 6px;
          color: #ffffff;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 14px;
        }
      `}</style>

      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

