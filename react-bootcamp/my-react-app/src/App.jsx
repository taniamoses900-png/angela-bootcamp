function App() {
  const name = "Tania Moses";
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p>Created by {name}</p>
      <p>Copyright {currentYear}</p>
    </div>
  );
}

export default App;