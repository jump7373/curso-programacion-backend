const fs = require("fs")

// //Lectura  de archivos Asincronicos
// fs.readFile("./holaMundo.txt", "utf-8", (err, data) =>{
//     if(err){
//         return "Error de lectura"
//     }

//     console.log(data)
// })

//Escritura de archivos asincronicos
fs.writeFile("./holaMundo.txt", "Texto nuevo asincrono", "utf-8", (err)=>{
    if(err){
        return "Error al escribir"
    }

    console.log("Se agrego el contenido")
})