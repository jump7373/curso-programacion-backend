// function foo() {
//     return "Hola"
// }

// //Función Anónima
// let suma = function(a, b) {
//     return a + b;
// }

// //Función Flecha con Return
// let resta = (a, b) => {
//      return a-b
// }

// //Función flecha sin parentesis
// let nombre = name => {
//     return "Hola " + name
// }

// //Función flecha en una línea (Return Implicito)

// let saludoInicial = (name) => "Hola, ¿Cómo estás " + name;

// console.log(foo())
// console.log (suma(8, 1))
// console.log (resta(7, 2))
// console.log(saludoInicial("Juan"))

//Validar antes del condicional
// function obtenerMayor (x, y) {
//     if (x >= y) {
//         console.log(parseInt(x))
//     }else{
//         console.log(parseInt(y))
//     }
// }



function obtenerMayor (x, y) {
    if (typeof x === "number" && y === "number"){
        if(x >= y) {
            return x;
        }else{
            return y;
        }
    }
    return "Ingese un número correcto"
}

console.log(obtenerMayor(1, 2))