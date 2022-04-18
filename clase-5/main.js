const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const puntoA = function(){
    const prod = productos.map(x => x.nombre)
    console.log("Punto A: " + prod.toString(","))
}

const puntoB = function() {
    const prod = productos.map (x => x.precio)
    const total = prod.reduce ((a, b) => a + b)
    console.log("Punto B: " + total)

}

const puntoC = function() {
    const prod = productos.map (x => x.precio)
    const total = prod.reduce ((a, b) => a + b , 0)
    const promedio = total / productos.length
    console.log("Punto C: " + promedio)
}

const puntoD = function() {
    const prod = productos.map (x => x.precio)
    
    console.log(Math.min.apply(null, prod))
}

const puntoE = function() {
    const prod = productos.map (x => x.precio)
    
    console.log(Math.max.apply(null, prod))
}

puntoA()
puntoB()
puntoC()
puntoD()
puntoE()
