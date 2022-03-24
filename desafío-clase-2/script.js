class Usuario {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = []
        this.mascotas = []
        
        }

        getFullName () {
            return `Hola soy ${this.nombre} ${this.apellido}` ;
        }

        addMascota (mascota) {
            return this.mascotas.push(mascota)
        }

        countMascotas() {
            return `Soy ${this.nombre} ${this.apellido} y tengo ${this.mascotas.length} mascotas`
        }

        addBook(nombre, escritor) {
            return this.libros.push({libro: nombre, autor: escritor})
        }

        getBookNames(){
            return this.libros.map(nameBook => nameBook.libro)
        }

        
    }

    //Creación de usuario
    const usuario1 = new Usuario ("Juan", "Mirabile")

    //Ejecución de método para agregar nombres de las mascotas
    usuario1.addMascota("Poio")
    usuario1.addMascota("Pepe")
    usuario1.addMascota("Athos")

    //Ejecución de método para agregar libros con sus nombres y autores
    usuario1.addBook("El señor de los anillos", "Tolkien")
    usuario1.addBook("1984", "Orwell")
    usuario1.addBook("Don Quijote de la Mancha", "Miguel de Cervantes")

    //Ejecución de método para conocer nombre y apellido del usuario
    console.log(usuario1.getFullName())

    //Ejecución de método para conocer nombre de los libros del usuario
    console.log(usuario1.getBookNames())
    
    //Ejecución del método para saber cuantas mascotas tiene el usuario
    console.log(usuario1.countMascotas())


