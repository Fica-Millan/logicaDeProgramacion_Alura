alert('Bienvenido al juego del número secreto');

let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'intento';
let maximoIntentos = 6;

//console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){
    // el Prompt le solicita informacion al usuario
    numeroUsuario = parseInt (prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

    // muestra en la consola el numero que ingresa el usuario
    console.log('Numero seleccionado por el usuario', numeroUsuario);
    // verificar la comparación entre "numeroUsuario" y "numeroSecreto"
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    // Se realiza la comparacion (el == es para comparar, el = es para asignar)
    if (numeroUsuario == numeroSecreto) {
        // el Alert abre una ventana emergente 
        //alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}.`);
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else{
        if(numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        }else{
            alert("El numero secreto es mayor.");
        }
        //intentos = intentos + 1;
        //intentos +=1;
        intentos ++;
        //palabraVeces = 'intentos';
        if (intentos > maximoIntentos){
            alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`);
            break;
        }
    }
}
