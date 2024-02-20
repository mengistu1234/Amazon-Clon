import React, { useContext, useEffect } from "react";
import "./App.css";
import Routing from "./Router.jsx";
import { DataContext } from "./components/dataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";

function App() {
  const { user, dispatch } = useContext(DataContext); // Destructure user and dispatch from DataContext

  useEffect(() => {
    const handleAuthStateChange = (authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    };

    const unsubscribe = auth.onAuthStateChanged(handleAuthStateChange);

    return () => {
      // Cleanup the subscription
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
