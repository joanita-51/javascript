import express from "express";
import { getUsers, getUser, createUser, deleteUser, updateUser, } from "../controllers/users.js";

const router = express.Router();

//all routes in here 
router.get('/users',getUsers);

router.post('/', createUser)

router.get('/users/:id', getUser)

router.delete('/users/:id', deleteUser)

router.patch('/users/:id', updateUser)

export default router;