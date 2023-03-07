import { Card, Button, Alert } from "react-bootstrap";
import { useTheme, useUpdateTheme } from "./ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";

export default function FunctionalComponent() {

  const theme = useTheme();
  const toggle = useUpdateTheme()
  const {currentUser, logout}= useAuth();
  const [error, setError]= useState();
  const navigate = useNavigate();

  const themeStyles = {
    backgroundColor: theme? '#333':'#ccc',
    color: theme? '#ccc' : '#333',
    padding: '2rem',
    marging: '5rem',
  }
  async function handleLogout(){
    setError('');
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      setError("Failed to log out")
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert>{error}</Alert>}
          <strong>Email:</strong>{currentUser && currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>

      {/* <button onClick={toggle}> Toggle Theme</button>
      <div style={themeStyles}>
        Function Theme
      </div> */}
    </>

  )
}
