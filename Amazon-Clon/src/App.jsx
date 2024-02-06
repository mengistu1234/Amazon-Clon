import React, { useState } from "react"; 
import "./App.css";
import Header from "./components/header/Header";
import Carousel from "./components/Caraousel/Carousel";
import Catagory from "./components/Catagory/Catagory";
 import Product from "./components/Product/Product";

function App() {
  const [count, setCount] = useState(); 

  return (
    <>
      <Header />
      <Carousel />
      <Catagory />
      <Product />
    </>
  );
}

export default App;
