var accion1 = "Piedra";
var accion2 = "Tijera";
var accion3 = "Papel";

function ganador(playerOne, cpu){

    switch(playerOne) {
        case "Piedra":
            switch(cpu){
                case "Tijera":
                console.log("Gano el player One: " + playerOne);
                break;
                case "Piedra":
                console.log("Es un empate ");
                break;
                default:
                console.log("Gano la CPU"+ cpu);
            }
            break;
        case "Papel":
            switch(cpu){
                case "Piedra":
                console.log("Gano el player One: " + playerOne);
                break;
                case "Papel":
                console.log("Es un empate ");
                break;
                default:
                console.log("Gano la CPU"+ cpu);
            }
            break;
        case "Tijera":
            switch(cpu){
                case "Papel":
                console.log("Gano el player One: " + playerOne);
                break;
                case "Tijera":
                console.log("Es un empate ");
                break;
                default:
                console.log("Gano la CPU"+ cpu);
            }
            break;
        default:
            console.log("Opncion no valida")
            
    }
}