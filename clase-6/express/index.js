const express = require("express")

const app = express()
const path = require("path")
const PORT = process.env.PORT || 8080

const user = {
    nombre:"Juan",
    apellido: "Mirabile",
    edad: 35,
    club:"Boca Juniors"
}

let counter = 0;

app.get("/productos", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))

})

app.get("/", (req, res) => {
    res.json(user)

})

app.get("/visitas", (req, res) => {
    counter++
    res.send({visitas: counter})
})

app.listen(PORT, () => {
    console.log("Server open port " + PORT)
})