import express from "express";
import cors from "cors";
//Creamos nuestro servidor
const app = express()

//Become json response
app.use(express.json())

//Hability the cors
app.use(cors())

//Definimos un puerto
const PORT = process.env.port ?? 3000


app.get('/information', (req,res) =>{
    try {
        res.send({
            status: true,
            nombre: "Yancy",
            apellido: "Alfaro"
        })
    } catch (error) {
        res.send({
            status: false,
            message:error.message
        })
    }
})
//Correr el servidor
app.listen(PORT, ()=>{
    console.log(`Server running at the port ${PORT}`)
})