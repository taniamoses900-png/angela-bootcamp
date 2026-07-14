import React from "react";
import cars from "./data";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  speedStats: { zeroToSixty: hondaZeroToSixty }
} = honda;
const {
  speedStats: { zeroToSixty: teslaZeroToSixty }
} = tesla;

const [hondaTopColour] = honda.coloursByTopSpeed;
const [teslaTopColour] = tesla.coloursByTopSpeed;

const { colour: hondaTopColourName } = hondaTopColour;
const { colour: teslaTopColourName } = teslaTopColour;

function App() {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColourName}</td>
          </tr>
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColourName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
