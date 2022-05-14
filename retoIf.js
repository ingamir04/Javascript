var accion1 = "Piedra";
var accion2 = "Tijera";
var accion3 = "Papel";

function ganador(playerOne, cpu){
    if(playerOne == "Piedra" && cpu == "Tijera"){
        console.log("Gano el player One: " + playerOne);
    }else if (playerOne == "Tijera" && cpu == "Papel"){
        console.log("Gano el player One:" + playerOne);
    } else if(playerOne=="Papel" && cpu=="Piedra"){
        console.log("Gano el player One:" + playerOne);
    }else if(playerOne===cpu){
        console.log("Es un empate");
    }else{
        console.log("Gano la CPU"+ cpu);
    }
}

ganador(accion1, accion2)