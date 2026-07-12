import "./App.css";
import baconImg from "./assets/bacon.jpg";
import chickenImg from "./assets/chicken.jpg";
import pastaImg from "./assets/pasta.jpg";

function App() {
  return (
    <div className="main-wrapper">
      <h1 className="heading">My Favourite Foods</h1>

      <div className="food-container">
        <div className="food-item">
          <p>Bacon</p>
          <img className="food-img" src={baconImg} alt="bacon" />
        </div>

        <div className="food-item">
          <p>Pasta</p>
          <img className="food-img" src={pastaImg} alt="pasta" />
        </div>

        <div className="food-item">
          <p>Chicken</p>
          <img className="food-img" src={chickenImg} alt="chicken" />
        </div>
      </div>
    </div>
  );
}

export default App;
