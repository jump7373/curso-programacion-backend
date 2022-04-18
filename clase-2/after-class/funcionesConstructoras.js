// function Persona (nombre) {
//     this.nombre = nombre;

//     this.saludar = function() {
//         return "Hola " + nombre
//     }
// }

// Persona.prototype.correr = function() {
//     return "Soy " + this.nombre + " y estoy corriendo"
// }

// const persona1 = new Persona ("Pedrito")

// console.log(persona1.correr())

//Cargar una función que me permita pasarle un String y me lo devuelva invertido

String.prototype.reverse = function(){
    return this.split("").reverse().join("")
}

console.log("Camilo".reverse())