import express from "express";

const router = express.Router();

const users =[
    {
        "firstName":"John",
        "lastName":"Doe",
        "age":20
    },
    {
        "firstName":"Jane",
        "lastName":"Doe",
        "age":23
    }
]

//all routes in here are starting with /users
router.get('/users',(req, res)=>{
    console.log(users)
    res.send(users)
});

export default router;