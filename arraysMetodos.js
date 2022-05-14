var articulos = [
    { nombre: "Bicicleta", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},

];
//Metodo filter -. generan nuevo arreglo
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});
articulosFiltrados;


//Metodo map - generan nuevo arreglo
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

//Metodo find() encontrar algo dentro del array, valida si es true o false
var encuentraArtoculo = articulos.find(function(articulo){
    return articulo.nombre === "Celular";
}); 
//Metoido forEch() - no crea un arreglo simplemnte filtrar sobre ell arreglo principal
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Metodo some() - regresar un validacion de true o false - se genera una rreglo
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
//* dsd*//
/hjhjj/