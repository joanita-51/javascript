import { v4 as uuidv4 } from 'uuid';

let users =[
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
export const getUsers =(req, res)=>{
    console.log(users)
    res.send(users)
}

export const createUser = (req, res)=>{
    const user = req.body;
    users.push({...user, id:uuidv4()})
    res.send(`user with the name ${user.firstName} added to the database`);
}

export const getUser = (req, res)=>{
    const {id} =req.params
    const foundUser = users.find((user)=>user.id === id)
    res.send(foundUser)
}

export const deleteUser = (req, res)=>{
    const {id} =req.params
    users = users.filter((user)=>user.id != id)
    res.send(`The user with the id ${id} has been deleted from the database`);
}

export const updateUser = (req,res)=>{
    const {id}= req.params
    const {firstName, lastName, age} = req.body
    const user = users.find((user)=>user.id === id)
    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age = age;
    res.send(`The user with the id ${id} has been updated`);
}