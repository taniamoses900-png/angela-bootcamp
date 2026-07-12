import Card from "./components/Card.jsx";
import adamImg from "./assets/adam.jpg";
import jimImg from "./assets/jim.jpg";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      
      <Card 
        name="Adam Sandler" 
        img={adamImg} 
        tel="+1 555 8831" 
        email="adam@happygilmore.com" 
      />

      <Card 
        name="Jim Carrey" 
        img={jimImg} 
        tel="+1 555 4429" 
        email="jim@liarliar.com" 
      />
    </div>
  );
}

export default App;
