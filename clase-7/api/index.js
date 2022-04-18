const express = require("express")

const app = express()

//GET
app.get("/", (req, res) =>{
    res.sendStatus(200).send("Hola Server")
})

// //PARAMS
// app.get("/:id", (req, res) =>{
//     let id = req.params.id
//     console.log(id)
//     res.send("Hola Server")
// })

//QUERY
app.get("/query", (req, res) =>{
    console.log(req.query)
    res.send("Hola Server con QUery")
})

app.get("/2", (req, res) =>{
    res.send({mesagge: "Hola A todos yo soy el león"})
})


app.listen(8080, () => {
    console.log("El servidor está funcionando")
})