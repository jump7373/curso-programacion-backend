const datos = [1, 2, 3]

const getInfo = () => {
    return new Promise ((resolve, reject) => {
        if(datos.length === 0){
            reject (new Error ("Error en la Promesa"))
        }else{
            resolve(...datos)
        }
    }) 
}

console.log(getInfo())