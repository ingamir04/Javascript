var marca = ["Honda","Susuki","Tesla","Yamaha"];
var modelo = ["DIO","BUN","RXT","N-MAX"];
var cilindraje = ["125 CC","110 CC","200 CC","155 CC"];

function motocicleta(marca, modelo, cilindraje) {
    this.marca = marca;
    this.modelo = modelo;
    this.cilindraje = cilindraje;
}
var cantidadObjetos = 4;

for (var i=0; i<cantidadObjetos;i++){
    var motoNueva = new motocicleta("Marca: "+marca[i]+ " modelo: " +modelo[i]+ " cilindraje: "+cilindraje[i] );
    console.log(motoNueva);
    
}
