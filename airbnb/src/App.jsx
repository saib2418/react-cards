import react from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <div className="card-container">
        <Card
          img="../src/images/3.jpg"
          location="San Jose, California"
          description="Popping champagne for graduation pics"
        />
        <Card
          img="../src/images/1.jpg"
          location="Los Angeles, California3"
          description="hiking in LA"
        />
        <Card
          img="../src/images/4.jpg"
          location="Big Island, Hawaii"
          description="nature on drive"
        />
        <Card
          img="../src/images/5.jpg"
          location="San Jose, California"
          description="sjsu spartan up..."
        />
      </div>
    </>
  );
}

export default App;
