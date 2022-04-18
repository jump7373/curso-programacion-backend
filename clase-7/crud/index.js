const express = require("express")

const arr = [
    {nombre: "Juan Pablo",
     apellido: "Mirabile",
     id: 1,
     nacionalidad: "Argentina"},

     {nombre: "Pedro",
     apellido: "Perez",
     id: 2,
     nacionalidad: "Peru"},

     {nombre: "Maria",
     apellido: "Gonzalez",
     id: 3,
     nacionalidad: "Brasil"}
]

const app = express()

app.get("/", (req, res) => {
    res.send(arr)
})

app.get("/:id", (req, res) =>{
    let id = req.params.id
    let arrId = arr.filter((x) => {
        return x.id == id
    })

    res.send(arrId)

    console.log(arrId)
})

app.post("/", (req, res) =>{

    console.log(req.body)


})

app.listen(8080, (req, res) =>{
    console.log("Server runing")
})