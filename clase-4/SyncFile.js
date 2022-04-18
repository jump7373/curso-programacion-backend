//Hacer un requerimiento 
const fs = require("fs")


//Leer archivos de forma Sincrónica
// let readFiles = fs.readFileSync("./holaMundo.txt", {encoding:"utf-8"})

// console.log(readFiles)

//EScribe en el documento ya creado de forma Sincrónica
// fs.writeFileSync("./holaMundo.txt", "Soy un nuevo Hola Mundo")

let lista = [
    {nombre: "Juan", apellido: "Mirabile"},
    {nombre: "José", apellido: "Morales"},
    {nombre: "Pedro", apellido: "Perez"}
]

// Crear un archivo de manera sincronica
fs.writeFileSync("./lista.json", JSON.stringify(lista, null, "\t"), {encoding: "utf-8"})

//Agregar un texto en un documento con contenido
// fs.appendFileSync("./holaMundo.txt", "\n Volvi en forma de fichas", {encoding: "utf-8"})


// //Atrapar un error en un console.log

// try{
//     let readFiles = fs.readFileSync ("./hola.txt", {encoding: "utf-8"})
//     console.log(readFiles)
// }catch(err){
//     console.log("Error, el archivo no existe")
// }

// try{
//     fs.unlinkSync("./holaMundo.txt")
//     console.log("Se borró el archivo")
// }catch(err){
//     console.log("Error, el archivo no existe")
// }

