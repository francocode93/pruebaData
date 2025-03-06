// metodos de objetos

// Object.keys
const pais = {
    nombre : "Perú",
    poblacion : 2000
}
// devuelve un arreglo
const arrayPais = Object.keys(pais)
console.log(arrayPais)

// OBJECT.ASSIGN

// a. fusionar propiedades
const i1 = {speak:"English",nombre:"franco"}
const i2 = {habla:"Español"}
const i3 = {parla:"Italiano"}

const idiomas = Object.assign(i1,i2,i3)
const cambio = Object.keys(idiomas)
console.log(cambio)

// b. sintesis al ultimo valor

const p1 = { nombre : "Peru"}
const p2 = { nombre : "Mexico",comida:"tacos"}
const p3 = { nombre : "Colombia"}
const p4 = { nombre : "argentina",comida:"Carne"}

const paises = Object.assign(p1,p2,p3,p4)
console.log(paises)


