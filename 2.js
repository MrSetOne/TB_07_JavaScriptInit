// Crear variable de nombre arrayVacio cuyo valor sea un array vacío
const arrayVacio = [];

// Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`La variable arrayNumeros tiene los valores ${arrayNumeros}`);

// Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)
const arrayNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(`La variable arrayNumeros2 tiene los valores ${arrayNumeros2}`);

// Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0, 2, 4, 6, 8];
console.log(`La variable arrayNumerosPares tiene los valores ${arrayNumerosPares}`);

// Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
console.log(`La variable arrayNumerosNeg tiene los valores ${arrayNumerosNeg}`);

// Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
const holaMundo = ["Hola", "Mundo"];
console.log(`La variable holaMundo tiene los valores ${holaMundo}`);

// Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
const loGuardoTodo = ["Hola", "que", 23, 42.33, "tal"];
console.log(`La variable loGuardoTodo tiene los valores ${loGuardoTodo}`);

// Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
const arrayDeArrays = [
    [756, 'nombre'],
    [225, 'apellido'],
    [298, 'direccion']
];
console.log(`La variable arrayDeArrays tiene los valores ${arrayDeArrays}`);

// Muestra por consola la longitud del array “loGuardoTodo”
console.log(`La longitud del array “loGuardoTodo” es: ${loGuardoTodo.length} `);

// Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola
loGuardoTodo.push("aguacate");
console.log(`El elemento que guardamos nuevo es ${loGuardoTodo[5]}, el array completo seria: ${loGuardoTodo}`);








// ESTEEEEEEEE!!!!!!
// Ordena de mayor a menor la variable arrayNumeros y muestrala por consola
arrayNumeros.sort((a, b) => {
    if (a > b) {
        return -1
    }
    if (a < b) {
        return 1
    }
    return 0
});
console.log(`La variable arrayNumeros ahora tiene los valores ${arrayNumeros}`);
// tambien se puede usar el .revers
// .sort se puede abreviar tambien así console.log(array.sort((a,b)=>a-b)); (Menor a Mayor)







// Ordena de menor a mayor la variable arrayNumeros2 y muestrala por consola
arrayNumeros.sort((a, b) => {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
});
console.log(`La variable arrayNumeros2 ahora tiene los valores ${arrayNumeros2}`);

// Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo
console.log(loGuardoTodo[1]);

// Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola
loGuardoTodo.push("Euralio");
console.log(`El elemento que guardamos nuevo es ${loGuardoTodo[6]}, el array completo seria: ${loGuardoTodo}`);