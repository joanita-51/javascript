import { createContext, useState } from "react";
import { Container } from "react-bootstrap";
import FunctionalComponent from "./Components/FunctionalComponent";
import SignUp from "./Components/SignUp";
import {ThemeProvider} from "./Components/ThemeContext"
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}
    >
      <div className="w-100" style={{maxWidth:"400px"}}>
        <SignUp/>
      </div>

    </Container>
    </AuthProvider>

    /*
    <ThemeProvider>
      <FunctionalComponent/>
    </ThemeProvider>*/
  ); 
}

export default App;
