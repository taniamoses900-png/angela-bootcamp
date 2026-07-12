import pi, { doublePi, triplePi } from "./math.js";

function App() {
  return (
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  );
}

export default App;
