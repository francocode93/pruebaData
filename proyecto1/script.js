let empresa = {
    nombre:"corporativo LATAM",
    empleados : 100
}

empresa.levantamientoCapita = true
empresa.tiempo = "40 años"
console.log(empresa)

// delete empresa.tiempo
// console.log(empresa)

empresa.edad = empresa.tiempo
delete empresa.tiempo
console.log(empresa)