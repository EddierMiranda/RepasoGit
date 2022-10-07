const students = [
    {
        name: "Felipe",
        age: 27,
        module: 'kata_js',
    },
    {
        name:'Johan',
        age: 20,
        module: 'kata_js',
    },
    {
        name: 'Saul',
        age: 39,
        module: 'kata_js',
    },
    {
        name: 'Darwin',
        age: 26,
        module: 'kata_js',
    }
]
for(i=0; i <4;i++){
    console.log(students[i])
}

//console.log('elementos de students', students.length)

//Method forEach
students.forEach((student) => {
    console.log(student.name)
})

//Method map
students.map((student) => {
    return student.name
})

//Method filter: recorre todo el arreglo, crea un arreglo nuevo, y filtra en función de una condición


//Method find: crea un arreglo, pero busca un elemento dentro del arreglo (retorna el primer que encuentra)


//Method reduce: retorna un valor acumulado


//Method some: verifica si un elemento existe en un arreglo y devuelve 'true' o 'false'



