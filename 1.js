// Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
// +
// Comenta el código que muestra el cuadro de diálogo

// alert("JavaScript funcionando correctamente");

// Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor;
console.log(`El valor de variableSinValor es ${variableSinValor}`);

// Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1 = true;
let booleano2 = false;
console.log(`El valor de booleano1 es ${booleano1}\nEl valor de booleano2 es ${booleano2}`)

// Crear variable tipo const de nombre PI declarada con valor 3.14
const PI = 3.14;
console.log(`El valor de PI es: ${PI}`);

// Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU = PI * 2;
console.log(`El valor de TAU es: ${TAU}, que es el doble de PI (${PI})`);

// Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre = "Mike"
console.log(`Mi nombre es ${miNombre}`);

// Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
let miNumeroFav = 7;
console.log(`Mi numero favorito es ${miNumeroFav}`);

// Crea una variable de tipo booleano
let booleano3 = true;

// Muestra por consola la longitud de la variable miNombre
console.log(`La longitud de mi nombre es: ${miNombre.length}`);

// Muestra por consola el tipo de dato de la variable miNumeroFav
console.log(`La variable llamada "miNumeroFav" es de tipo ${typeof(miNumeroFav)}`);

// Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`);

// Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase());

// Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
console.log("Hola soy un crack".substring(0, 4));




// ESTEEEEE!!!!!
// Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
miNumeroFav = "7"; //Esto tambien se puede hacer con .toSring() y es mas clean
console.log(`La variable miNumeroFav ha sido cambiada a ${typeof(miNumeroFav)}`);





// Crea una variable, concaténala utilizando template literal, guarda el template literal en otra variable y sacala por consola.
const fraseConcatenada = `Yo, ${miNombre}, me he rallado mil con este enunciado`;
console.log(fraseConcatenada);






// ESTEEEEEEE!!!!!!!!!
// Muestra por consola la variable PI hasta los 2 primeros decimales
console.log(PI) // Esto tambien se puede hacer con .toFixed