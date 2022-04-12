// Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
const coche = {
    marca: "Ford",
    modelo: "Mustang",
    matricula: "ATIKE69",
};
console.log(coche);

// Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores
const casa = {
    codPostal: 54321,
    calle: "Calle falsa",
    portal: 69,
    piso: "UwU",
};
console.log(casa);

// Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)
const FullStackDeveloper = {
    lenguajes: ["JavaScript", "php"],
    proyectos: ["TaskR", "Mi pagina personal", "etc"]
};
console.log(FullStackDeveloper);

// Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores
const perro = {
    nombre: "Kira 😍",
    raza: "Ni lo se ni me importa",
    color: "Marron mas bonito del mundo",
    edad: 9,
};
console.log(perro);

// Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores
const Noticia = {
    titular: "Rajoy dice lo que habia que decir",
    cuerpo: "Haré todo lo que pueda y un poco más de lo que pueda si es que eso es posible, y haré todo lo posible e incluso lo imposible si también lo imposible es posible",
};
console.log(Noticia);

// Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores
const Persona = {
    nombre: "Maria",
    apellidos: "Unporro",
    edad: 420,
};
console.log(Persona);

// Muestra por consola el nombre de la variable Persona
console.log(Persona.nombre);

// Muestra por consola el lenguaje javascript de la variable FullStackDeveloper
console.log(FullStackDeveloper.lenguajes[0]);

// Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola
const Portatil = {
    marca: "MSI",
};
console.log(Portatil.marca);

// Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola
console.log(Portatil["marca"]);

// Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola
const Concierto = {
    grupos: ["Doble V", "SFDK", "Ajax y Prok"],
}
console.log(Concierto.grupos);

// Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola
const Led = {
    rojo: 2,
    verde: 4,
    azul: 5,
};
const RGB = [Led.azul, Led.verde, Led.azul]
console.log(RGB);

// Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola
const O_Error = {
    codigo: "No pillo en enunciado.exe"
};
console.log(O_Error.codigo);

// Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes
const grupo = {
    integrantes: ["Julian", "Pepe", "Paco"],
};
console.log(grupo.integrantes[0]);

// Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola
const Impresora = {
    tinta: {
        rojo: 100,
        verde: 0,
        azul: 1,
    }
};
console.log(Impresora.tinta);

// Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola
const Movil = {
    especificaciones: ["Ryzen 5900", "RTX4090"],
};
console.log(Movil["especificaciones"]);

// Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
Portatil.marca = "Aguacte"
console.log(Portatil.marca);

// Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado
Concierto.grupos.push("Guns N' Roses");
console.log(Concierto.grupos);

// Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado
Concierto.fecha = "18 de enero 2023";
Concierto.fecha = new Date();
console.log(Concierto.fecha);

// Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)
Concierto.grupos.pop();
console.log(Concierto.grupos.length)