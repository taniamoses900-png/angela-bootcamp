import "./App.css";

const time = new Date().getHours();
let greeting = "";

const headingStyle = {
  color: "",
};

if (time < 12) {
  greeting = "Good Morning";
  headingStyle.color = "red";
} else if (time < 18) {
  greeting = "Good Afternoon";
  headingStyle.color = "green";
} else {
  greeting = "Good Evening";
  headingStyle.color = "blue";
}

function App() {
  return (
    <h1 className="heading" style={headingStyle}>
      {greeting}
    </h1>
  );
}

export default App;
