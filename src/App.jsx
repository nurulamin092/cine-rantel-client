import { useState } from "react";
import { MovieContext } from "./ context";
import Page from "./Page";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Page />
      </MovieContext.Provider>
    </>
  );
}

export default App;
