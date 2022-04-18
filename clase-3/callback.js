// const decirHola = (usuario) => {
//     return "Hola " + usuario + ", ¿Cómo estás?"
// }

// const decirAdios = (usuario) => {
//     return "Adios " + usuario + ", buen viaje"
// }

// const crearSaludo = (usuario, cb) => {
//     return cb (usuario)
// }

// const saludo = "Error"

// console.log(crearSaludo("Juan", decirAdios))


const sumar = (a, b) => {

    return a + b;
}

const restar = (a, b) => {

    return a - b;
}

const multiplicar = (a, b) => {

    return a * b;
}

const dividir = (a, b) => {
    return a / b;
}

const calcular = (a, b, cb) => cb (a, b);


console.log(calcular(3, 8, multiplicar))