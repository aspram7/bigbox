import React from "react";
import Header from "../src/components/Header";
import Sections from "../src/containers/Sections";
import { useWindowWidth } from "./helpers/getWindowWidth";
import "./App.css";

export const WidthContext = React.createContext(null);

function App() {
  const { width } = useWindowWidth();
  return (
    <div className="App">
      <WidthContext.Provider value={width}>
        <Header />
        <Sections />
      </WidthContext.Provider>
    </div>
  );
}

export default App;
