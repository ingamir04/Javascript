//Lista de datos
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length);
//Metodos para mutuar el array
var masFrutas = frutas.push("Uvas");

//Eliminar el ultimo elemento
var ultimo = frutas.pop("Maracuya");

// Agrega un elemento a un array en la primera posicion
var nuevaLongitug = frutas.unshift("Maracuya");

//Eliminar el elemento que estye en el inicio
var borrarFruta = frutas.shift("Maracuya");

// Posicion en el array
var posicion = frutas.indexOf("Platano");