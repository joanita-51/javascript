import React, {useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate} from 'react-router-dom';

export default function UpdateProfile() {
    const {currentUser, updatePassword, updateEmail}=useAuth();
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")
    const [error, setError]=useState("")
    const [loading, setLoading]= useState(false) //prevents users from setting up multiple accounts whenever the signup button is clicked
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        
        if(password !== confirmPassword){
            return setError("Passwords do not match")
        }

        const promises =[]
        setLoading(true)
        setError('')
        
        if(email !== currentUser.email){
            promises.push(updateEmail(email))
        }
        if(password){
            promises.push(updatePassword(password))
        }

        Promise.all(promises).then(()=>{
            navigate("/")
        }).catch((e)=>{
            setError('Failed to update account')
            console.log(e)
        }).finally(()=>{
            setLoading(false)
        })
    //     try {
    //         setError('')
    //         setLoading(true)
    //         await signup(email, password )
    //         navigate('/');
    //     } catch (error) {
    //         setError("Failed to create an account");
    //     }
    //     setLoading(false);

    }


  return (
    <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Update Profile</h2>

                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={e => setEmail(e.target.value)} defaultValue={currentUser && currentUser.email} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder='Leave blank to keep the same'/>
                    </Form.Group>
                    <Form.Group id="confirm-password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" onChange={e => setConfirmPassword(e.target.value)} placeholder='Leave blank to keep the same'/>
                    </Form.Group>
                    <Button className='w-100 mt-5' type="submit" disabled={loading}> Update</Button>
                </Form>


            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            <Link to ="/"> Cancel</Link>
        </div>
    </>
  )
}
