import React, { useState } from "react"; // Added React import
import "./App.css";
import Header from "./components/header/Header";
import Carousel from "./components/Caraousel/Carousel";
import Catagory from "./components/Catagory/Catagory";

function App() {
  const [count, setCount] = useState(0); // Added count state

  return (
    <>
      <Header />
      <Carousel/>
      <Catagory/>
    </>
  );
}

export default App;
