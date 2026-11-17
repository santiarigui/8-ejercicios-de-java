// Ejercicio 5: Juego de adivinanza con pistas
// El usuario debe adivinar un numero aleatorio entre 1 y 100 en maximo 7 intentos.

const readline = require("node:readline/promises");
const { stdin: entrada, stdout: salida } = require("node:process");

async function iniciar() {
    const lector = readline.createInterface({ input: entrada, output: salida });

    // Math.random genera un numero decimal entre 0 y 1.
    // Math.floor y +1 permiten obtener un entero entre 1 y 100.
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;

    let intentos = 0;
    let acerto = false;

    console.log("Adivine el numero secreto entre 1 y 100.");
    console.log("Tiene maximo 7 intentos.");

    while (intentos < 7 && acerto === false) {
        const respuesta = Number(await lector.question(`Intento ${intentos + 1}: `));
        intentos++;

        if (!Number.isInteger(respuesta) || respuesta < 1 || respuesta > 100) {
            console.log("Ingrese un numero entero entre 1 y 100.");
        } else if (respuesta === numeroSecreto) {
            acerto = true;
            console.log(`Felicitaciones. Adivino el numero en ${intentos} intento(s).`);
        } else if (respuesta > numeroSecreto) {
            console.log("Muy alto.");
        } else {
            const diferencia = numeroSecreto - respuesta;

            if (diferencia > 10) {
                console.log("Muy frio.");
            } else {
                console.log("Muy caliente.");
            }
        }
    }

    if (acerto === false) {
        console.log(`Se acabaron los 7 intentos. El numero era ${numeroSecreto}.`);
    }

    lector.close();
}

iniciar();
