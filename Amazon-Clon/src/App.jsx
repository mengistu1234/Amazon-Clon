import React, { useState } from "react"; 
import "./App.css";
import Routing from "./Router.jsx";
function App() {
  const [count, setCount] = useState(0); 

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
