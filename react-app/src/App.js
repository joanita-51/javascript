import { createContext, useState } from "react";
import { Container } from "react-bootstrap";
import FunctionalComponent from "./Components/FunctionalComponent";
import SignUp from "./Components/SignUp";
import {ThemeProvider} from "./Components/ThemeContext"
import { AuthProvider } from "./contexts/AuthContext";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogIn from "./Components/LogIn";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}
    >
      <div className="w-100" style={{maxWidth:"400px"}}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FunctionalComponent/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/update-profile' element={<UpdateProfile/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      </div>


    </Container>
    /*
    <ThemeProvider>
      <FunctionalComponent/>
    </ThemeProvider>*/
  ); 
}

export default App;
