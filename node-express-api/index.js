import express from "express"
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js'

const app = express();
const PORT = 5000;
app.use(bodyParser.json());

// User routes
app.use("/", userRoutes);

//Home page
app.get('/',(req, res)=>{
    console.log("Hello");
    res.send("hello from the home page")
})

app.listen(PORT,()=>console.log(`server is running on port http://localhost:${PORT}`))