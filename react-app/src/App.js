import { createContext, useState } from "react";
import FunctionalComponent from "./Components/FunctionalComponent";

//Creating the context
export const ThemeContext = createContext()

function App() {
  const [theme, setTheme]= useState('dark');
  return (
    // Providing the context
    <ThemeContext.Provider value={theme} >
      <button onClick={()=>{setTheme(!theme)}}>Change Theme</button>
      <FunctionalComponent/>
    </ThemeContext.Provider>
  );
}

export default App;
