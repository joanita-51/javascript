import { createContext, useState } from "react";
import FunctionalComponent from "./Components/FunctionalComponent";
import {ThemeProvider} from "./Components/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <FunctionalComponent/>
    </ThemeProvider>
  );
}

export default App;
