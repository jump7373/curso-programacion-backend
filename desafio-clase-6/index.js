const express = require("express")
const app = express()
const fs = require("fs")
const port = 8080; 

const contenedor = require("./desafío-clase-3/script")



app.get("/productos", (req, res) => {
    
    fs.readFile(`./productos.txt`, `utf-8`, (err, data) => {
        if(err){
            console.log("Error en la carga")
        }else{
            res.send(JSON.parse(data))
        }
    })
   
})

app.get("/productoRandom", (req, res) => {
    
    fs.readFile(`./productos.txt`, `utf-8`, (err, data) => {
        if(err){
            console.log("Error en la carga")
        }else{
            let productosParseados = JSON.parse(data)
            let productoRandom = productosParseados[Math.floor(Math.random() * productosParseados.length)];
            res.send(productoRandom)
        }
    })
   
})

app.get("/", (req, res) =>{
    res.send("Bienvenidos al desafío 6 de Juan Pablo Mirabile")
})


app.listen(port, () => {
    console.log("Server en funcionamiento")
})

const archivo1 = new Contenedor("productos.txt");

const escuadra = {                                                                                                                                                    
    title: 'Escuadra',                                                                                                                                 
    price: 123.45,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
    id: 1                                                                                                                                              
  }

  const calculadora = {                                                                                                                                                    
    title: 'Calculadora',                                                                                                                              
    price: 234.56,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
    id: 2                                                                                                                                              
  }

  const globoTerraqueo = {                                                                                                                                                    
    title: 'Globo Terráqueo',                                                                                                                          
    price: 345.67,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
    id: 3                                                                                                                                              
  } 

//archivo.save(escuadra)
//archivo.save(calculadora)
//archivo.save(globoTerraqueo)
//archivo1.save()
//achirvo1.getAll()
//archivo1.deleteAll()