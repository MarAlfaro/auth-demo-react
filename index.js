import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

//Creamos nuestro servidor
const app = express()

//Become json response
app.use(express.json())

//Hability the cors
app.use(cors())

//Definimos un puerto
const PORT = process.env.port ?? 3000

//Call the route
app.use(UserRoute)

//Correr el servidor
app.listen(PORT, ()=>{
    console.log(`Server running at the port ${PORT}`)
})