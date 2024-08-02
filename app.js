/*
console.log("some "+"text")
console.log("some "+"more "+"text")
console.log(typeof -3.1415)

console.log(typeof true)
console.log(typeof "true")
//alert("Bienvenido a JavaScript")
let tuNombre = prompt("Ingrese su nombre")
alert("Tu te llamas "+ tuNombre)
console.log("Tu te llamas "+ tuNombre)
let tuEdad = prompt("Ingrese su edad")
alert("Tu tienes "+ tuEdad +" años")
console.log("Tu tienes "+ tuEdad +" años")

console.log(typeof NaN)
console.log("Items (2) $28.94")
console.log(1+1)
console.log("hola"+8)
console.log("Items ("+(1+1)+") $"+(7.99*100+20.95*100)/100)*/


/*let primerNombre = 'Joaquín';
let segundoNombre = 'André';
let apellidoPaterno = 'Bustamante';

alert(`${primerNombre} ${segundoNombre} ${apellidoPaterno}`)*/


//TIPOS DE QUOTES O COMILLAS PARA STRINGS

//let mensaje1 = "Hola a todos";  // mensaje entre comillas dobles
//alert(mensaje1);

//let mensaje2 = "Hola a todos"; // mensaje entre comillas simples
//alert(mensaje2);

//let mensaje3 = `Hola a todos`; // mensaje entre backticks
//alert(mensaje3);

// ANIDAMIENTO O ANIDADOS - MAMUSHKAS
//let elMensaje = "Ella dijo 'tengo 18 años' y se fue molesta."; // "mensaje"  'la frase'
//alert(elMensaje);

// PROMPT & ALERT
//pido el nombre y guardo el nombre en una variable
//let miNombre = prompt("Ingrese su nombre:");

// mostrar el nombre ingresado con el pop-up
//alert(`Bienvenido al curso de Javascript, ${miNombre}`);

// *********************************************************

// ********* ÍNDICES O INDEX => siempre inicia desde el CERO!
//let palabraLarga = "Producto";

/* 
         P r o d u c t o
índice:  0 1 2 3 4 5 6 7
posición:1 2 3 4 5 6 7 8
*/

/*
console.log("palabraLarga[0]: ", palabraLarga[0]);
console.log("palabraLarga[1]: ", palabraLarga[1]);
console.log("palabraLarga[2]: ", palabraLarga[2]);
console.log("palabraLarga[3]: ", palabraLarga[3]);
console.log("palabraLarga[4]: ", palabraLarga[4]);
console.log("");

// ******  .length (longitud) propiedad
console.log("Thiago".length);
console.log("Thiago"[5]);
console.log("Thiago"[4]);
console.log("Thiago"[3]);
console.log("Thiago"[2]);
console.log("Thiago"[1]);
console.log("Thiago"[0]);
console.log("");

console.log("BustamAnte"[4]);   // a
console.log("BustamAnte"[6]);   // A
console.log("BustamAnte"[0]);   // B
console.log("BustamAnte"[-1]);  // undefined
*/

// ******* toUpperCase() method  ==>  convierte el texto a MAYÚSCULAS
/*
console.log("luis".toUpperCase());
console.log("joaquín".toUpperCase());
console.log("thiago".toUpperCase());
*/

//let usuario = prompt("Ingrese su usuario:");
//alert(`su usuarfio es ${usuario.toUpperCase()} !`);

// ********** .toLowerCase() method ==>  convierte el texto a minúsculas
//console.log("HOLA MUNDO".toLowerCase());
//console.log("Hola Mundo".toLowerCase());

//let usuario = prompt("Ingrese su usuario:");
//alert(`su usuario es ${usuario.toLowerCase()} !`);

// ********** .trim() method ==>  elimina los espacio tanto al inicio como al final:
//console.log("      hola     a             todos           ".trim());

//let usuario = prompt("Ingrese su usuario:");
//alert(`su usuario es ${usuario.trim()} !`);

/*
let nuevaPalabra =
  "            ni el estado ni la escuela te quieren libre                         ";
console.log(nuevaPalabra);
console.log(nuevaPalabra.length);
console.log("");
console.log(nuevaPalabra.trim().toUpperCase());
console.log(nuevaPalabra.trim().toUpperCase().length);
*/


/*let anioNacimiento2 = prompt("Ingrese su año de nacimiento");
let anioActual2 = prompt("Ingrese el año actual");
let edad = anioActual2 - anioNacimiento2;
console.log("Usted tiene " + edad + " años");*/


/*let dinero = prompt("¿Cuánto dinero desea retirar?");
//alert(typeof dinero);
//let dineroEnNumero = Number(dinero);
let dineroEnEntero = Number(dinero);
let dineroConDecimal = Number(dinero);
//console.log("Dinero en numero: " + dineroEnNumero);
//console.log("Dinero en entero: " + dineroEnEntero);
//console.log("Dinero con decimal: " + dineroConDecimal);
//alert(dineroEnEntero);
console.log(dineroEnEntero);
console.log(dineroConDecimal);

--> parseInt = `Metodo para convertir Strings a Number especificamente a Enteros`
--> parseFloat = `Metodo para convertir Strings a Number especificamente a Decimales`
*/


//let valorAbsoluto = prompt(`Ingrese un numero para calcularle un valor absoluto`);
//alert(Math.abs(valorAbsoluto));


/*
  Pedir al usuario que ingrese 2 numeros
  Calcular la resta de los numeros ingresados
  Calcular el Valor absoluto de dicha resta
*/


/*let valor1 = parseInt(prompt(`Por favor, ingrese un numero`));
let valor2 = parseInt(prompt(`Por favor, ingrese otro numero`));

alert(`La resta de los numeros es: ${valor1 - valor2}`);
alert("La resta de los numeros es: "+(valor1 - valor2));
alert("El valor absoluto de dicha resta es: "+(Math.abs(valor1 - valor2)));*/

let numero1 = parseFloat(prompt(`Por favor, ingrese un numero`));
let numero2 = parseFloat(prompt(`Por favor, ingrese otro numero`));

alert(`La resta de los numeros es: ${numero1 - numero2}`);
alert("La resta de los numeros es: "+(numero1 - numero2));
alert("El valor absoluto de dicha resta es: "+(Math.abs(numero1 - numero2)));

