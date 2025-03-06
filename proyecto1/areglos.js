/*ARREGLOS
TIPO DE DATO
PERMITEN ALMACENARMULTIPLES DATOS EN UNA VARIABLE
PUEDEN CONTENER MAS DE UN VALOR AL SIMULTANEO
CADA UNO DE ESOS VALORES LOS LLAMREMOS "ELEMENTO" 
*/

// CREACION DE UN  ARREGLO ↓

// const persona = ["mike","pedro","laura"]
// console.log(persona)
// console.log(persona[2])
// console.log(persona[4]) 

// saber cuantos elementos tiene un arreglo ↓

// console.log(persona.length)

// acceder al ultimo elemento del areglo ↓

// console.log(persona[persona.length-2])

// en que momento vale la pena utilizar areglos?
// cuando necesites agrupar 
// un arreglo debe tener con sus elementos el mismo tipo de dato ?↓
// const elementos=[
//     "nombre",
//     31,
//     true,
//     {
//         pais:"Mexico"
//     }
// ]
// console.log(elementos)

// MANIPULACION DE ARREGLOS

const personas=["mike","luisa","gerardo"]

//sacar el ultimo elemento de un arreglo
personas.pop()
console.log(personas)
//agregar un elemento al final de un areglo
personas.push("franco")
personas.push("carlos")
console.log(personas)
//quitar un elemento al incio de una arreglo
personas.shift()
console.log(personas)
// agregar un elemento al inicio de un arreglo
personas.unshift("rodrigo")
personas.unshift("carla")
console.log(personas)
// cambiar de valor un elemento
personas[0]="jean"
console.log(personas)
// slice- crea un nuevo arreglo desde el punto indicado
const nuevasPersonas=personas.slice(1,3)
console.log(nuevasPersonas)
// splice - sirve para agregar elementos como eliminarlas a la vez el primer valor agrega en la posicion y el segundo valor elimina
personas.splice(1,2,"sandra")
console.log(personas)






