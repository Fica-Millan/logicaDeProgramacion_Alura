alert('Bienvenido al juego del número secreto');

let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 6;

//console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){
    // el Prompt le solicita informacion al usuario
    numeroUsuario = parseInt (prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));

    // muestra en la consola el numero que ingresa el usuario
    console.log('Número seleccionado por el usuario', numeroUsuario);
    // verificar la comparación entre "numeroUsuario" y "numeroSecreto"
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    // Se realiza la comparacion
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
    } else{
        if(numeroUsuario > numeroSecreto){
            alert("El número secreto es menor.");
        }else{
            alert("El número secreto es mayor.");
        }
        intentos ++;
        if (intentos > maximoIntentos){
            alert(`Llegaste al número máximo de ${maximoIntentos} intentos`);
            break;
        }
    }
}