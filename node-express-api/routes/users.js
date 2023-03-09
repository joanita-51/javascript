import express from "express";

const router = express.Router();

//all routes in here are starting with /users
router.get('/users',(req, res)=>{
    res.send("Hello")
});

export default router;