// colaboracion con funciones 
// objeto constructor
// a traves de una function podemos construir un obejeto utilizando
// la palabra "new" 
function Persona (nombre,edad){
    // PROPIEDADES
    this.nombre = nombre
    this.edad = edad
    // METODOS
    this.saludar = function(){
        return "hola "+this.nombre+ " como estas ?"
    }
    this.edades = function(){
        return "hola "+ this.nombre + " tu edad es " + this.edad
    }
}

const persona1 = new Persona("franco",31)
console.log(persona1.saludar())
console.log(persona1.edades())


const persona2 = new Persona("Antony",28)
console.log(persona2.saludar())
console.log(persona2.edades())

