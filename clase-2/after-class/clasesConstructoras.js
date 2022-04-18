// class Gato{
//     constructor(nombre){
//         this.nombre = nombre;
//     }

//     maullar () {
//         return "Mi nombre es "+ this.nombre +  " y... miuau"
//     }
// }

// const gato1 = new Gato ("Poio")

// console.log(gato1)

class Usuario{
    constructor(opciones){
        this.usuario = opciones.usuario;
        this.nombre = opciones.nombre;
        this.email = opciones.email;
        this.password = opciones.password;
    }

    getUser()
}

let objUser = {
    usuario: "jump73",
    nombre: "Juan Pablo",
    email: "jpmirabile@gmail.com",
    password: "contrasenia"

}

const usuario1 = new Usuario (objUser)
const usuario2 = new Usuario ({usuario: "JPM", nombre:"Jordan Pedro Morales", email:"jpm@hotmail.com", password:"secreto"})

console.log(usuario1)
console.log(usuario2)