const fs = require("fs")

//Manejo de archivos con Promesas
// fs.promises.readFile("./holaMundo1.txt", "utf-8")

// .then((data) => {
//     try{
//         console.log(data)
//     }catch{
//         console.log("Error en el archivo")
//     }
// }).catch((err) => {
//     throw "Error en el catch"
// })

//Manejo de archivos son Sync/Await
const save = async () => {
    try{
        let readFile = await fs.promises.readFile("./holaMundo.txt", "utf-8")
        console.log(readFile)
    }catch(err){
        console.log("Error al leer")
    }
}


save()