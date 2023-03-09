import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users =[
    {
        firstName: 'Joan',
        lastName: 'Doe',
        age: 2,
        id: '618ee19d-b901-48f7-9db0-a089ea28b0c0'
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 28,
        id: '18e07690-1c53-4006-ab34-e7802c9b5f97'
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 25,
        id: 'b4855144-bdfa-4d07-b3a6-673722ffbc6a'
      }
]

//all routes in here are starting with /users
router.get('/users',(req, res)=>{
    console.log(users)
    res.send(users)
});

router.post('/',(req, res)=>{
    const user = req.body;
    users.push({...user, id:uuidv4()})
    res.send(`user with the name ${user.firstName} added to the database`);
})

router.get('/users/:id', (req, res)=>{
    const {id} =req.params
    const foundUser = users.find((user)=>user.id === id)
    res.send(foundUser)
})

export default router;