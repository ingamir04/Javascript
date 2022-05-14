//Ciclos y formas
var estudiantesNotas = [4.0,3.0,2.5];
var notaFinal;
var acumuladorNotas=0;

function notaFinal(notas){
    
    console.log(`Nota del estudiante, ${notas} `);
    acumuladorNotas = acumuladorNotas + notas;
}

//for normal
for(var i = 0;i < estudiantesNotas.length;i++){
    //console.log(estudiantesNotas[i]);
    notaFinal(estudiantesNotas[i]);
}
notaFinal = acumuladorNotas/estudiantesNotas.length;
console.log("La nota final del estudiantes: "+ notaFinal);


// llama cada noda de cada estudiante of [array]
for (var nota of estudiantesNotas){
    notaFinal(nota);
}

//While

var estudiantes = ["Amir", "Mery", "Sergio", "Rosa"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);   
}

while(estudiantes.length>0){
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}

