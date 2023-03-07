import React, {useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';

export default function SignUp() {
    const {signup}=useAuth();
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")
    const [error, setError]=useState("")
    const [loading, setLoading]= useState(false) //prevents users from setting up multiple accounts whenever the signup button is clicked

    function handleSubmit(e) {
        e.preventDefault()
        
        if(password !== confirmPassword){
            return setError("Passwords do not match")
        }
        
        try {
            setError('')
            setLoading(true)
            signup(email, password )
        } catch (error) {
            setError(error);
        }
        setLoading(false);

    }


  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>

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
                    <Form.Group id="confirm-password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" onChange={e => setConfirmPassword(e.target.value)}required/>
                    </Form.Group>
                    <Button className='w-100 mt-5' type="submit" disabled={loading}> Sign Up</Button>
                </Form>


            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account? Login
        </div>
    </>
  )
}
