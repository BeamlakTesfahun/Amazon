import React, { useContext, useEffect } from "react";
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/action.type";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    dispatch({
      type: Type.SET_USER,
      user: null,
    });
  }, []);

  return <Routing />;
}

export default App;
