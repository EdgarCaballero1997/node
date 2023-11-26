// RETO 1

// Hacer que se imprima un mensaje que indique “Mensaje 1” nada más ejecutar el programa.
let mensajes = () => {
    console.log('Mensaje 1');
// Pasados tres segundos, se debe imprimir “Mensaje 2”.
    setTimeout(() => {
        console.log('Mensaje 2');
// Y después de que se imprima este mensaje, que se imprima “Mensaje 3”
        console.log('Mensaje 3');
    }, '3000');
}
mensajes();