import React, {useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function LogIn() {
    const {login}=useAuth();
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError]=useState("")
    const [loading, setLoading]= useState(false) //prevents users from setting up multiple accounts whenever the signup button is clicked
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        
        try {
            setError('')
            setLoading(true)
           await login(email, password )
           navigate('/') // Go to that page after successful login
        } catch (error) {
            setError("Failed to Login");
            // console.log(error)
        }
        setLoading(false);

    }


  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Log In </h2>

                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={e => setEmail(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)}required/>
                    </Form.Group>
                    <Button className='w-100 mt-5' type="submit" disabled={loading}>Log In</Button>
                    <div className='w-100 text-center mt-3'>
                        <Link to="/forgot-password" >Forgot Password</Link>
                    </div>

                </Form>


            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Need an account? <Link to ="/signup">Sign UP</Link>
        </div>
    </>
  )
}
