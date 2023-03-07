import React, {useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const {resetPassword}=useAuth();
    const [email, setEmail]=useState("")
    const [error, setError]=useState("")
    const [message, setMessage]= useState("")
    const [loading, setLoading]= useState(false) //prevents users from setting up multiple accounts whenever the signup button is clicked

    async function handleSubmit(e) {
        e.preventDefault()

        
        try {
            setMessage('')
            setError('')
            setLoading(true)
           await resetPassword(email)
           setMessage("Check your inbox for further instructions")
        } catch (error) {
            setError("Failed to reset Password");
            // console.log(error)
        }
        setLoading(false);

    }


  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Password Reset</h2>
                {message && <Alert variant='success'>{message}</Alert>}
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={e => setEmail(e.target.value)} required/>
                    </Form.Group>

                    <Button className='w-100 mt-5' type="submit" disabled={loading}>Reset Password</Button>
                    <div className='w-100 text-center mt-3'>
                        <Link to="/login" >Login</Link>
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
