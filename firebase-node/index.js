import express from "express"
import bodyParser from "body-parser"
import firebase from "firebase-admin"
import credentials from "./credentials.json" assert { type: "json" }

const app = express();
const PORT = process.env.PORT||8080;

firebase.initializeApp({
    credential: firebase.credential.cert(credentials)
})

app.use(bodyParser.json());

app.get('/',(req, res)=>{
    console.log("hello")
    res.send("Welcome")
})

app.post('/signup', async( req, res)=>{
    const userResponse = await firebase.auth().createUser({
        email:req.body.email,
        password: req.body.password,
        userRole:req.body.role
    })
    res.send(userResponse)
})

app.post('/login',async(req,res)=>{
    const {email}=req.body;
    const userLogin = await firebase.auth().getUserByEmail(email)
    res.send(userLogin)
})


app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})