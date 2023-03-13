import express from "express"
import bodyParser from "body-parser"
import firebase from "firebase-admin"
import credentials from "./credentials.json" assert { type: "json" }

const app = express();
const PORT = process.env.PORT||8080;

firebase.initializeApp({
    credential: firebase.credential.cert(credentials)
});

const db = firebase.firestore();

app.use(bodyParser.json());

app.get('/',(req, res)=>{
    console.log("hello")
    res.send("Welcome")
})

app.post('/signup', async( req, res)=>{
    const userResponse = await firebase.auth().createUser({
        email:req.body.email,
        password: req.body.password,
    })
    res.send(userResponse)
})

app.post('/login',async(req,res)=>{
    const {email}=req.body;
    const userLogin = await firebase.auth().getUserByEmail(email)
    res.send(userLogin)
})

app.post('/create',async(req,res)=>{
    try {
        const userJson ={
            email:req.body.email,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            userRole:req.body.userRole
        };
        console.log(userJson)
        const response = await db.collection("users").add(userJson);
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

app.get("/read/all",async(req,res)=>{
    try {
        const usersRef = db.collection("users");
        const response = await usersRef.get ();
        let responseArr = [];
        response.forEach((doc)=>{
            responseArr.push(doc.data());
        })
        res.send(responseArr);
    } catch (error) {
        res.send(error)
    }
})

app.get('/read/:id', async(req,res)=>{
    try {
        const userRef = db.collection("users").doc(req.params.id);
        const response = await userRef.get()
        console.log(response)
        res.send(response.data());
    } catch (error) {
        res.send (error)
    }
})
app.post('/update', async(req,res)=>{
    
})
app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})