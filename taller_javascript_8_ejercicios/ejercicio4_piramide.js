// Ejercicio 4: Piramide numerica
// Genera una piramide ascendente y otra invertida.
// Se utilizan contadores para imprimir los espacios y centrar las filas.

const readline = require("node:readline/promises");
const { stdin: entrada, stdout: salida } = require("node:process");

async function iniciar() {
    const lector = readline.createInterface({ input: entrada, output: salida });
    const altura = Number(await lector.question("Ingrese la altura de la piramide: "));

    if (!Number.isInteger(altura) || altura < 1) {
        console.log("Error: ingrese un numero entero mayor que cero.");
    } else {
        console.log("\nPiramide ascendente:");

        // Cada fila imprime los numeros desde 1 hasta el numero de la fila.
        for (let fila = 1; fila <= altura; fila++) {
            let espacios = "";

            // Los espacios permiten centrar la fila.
            for (let espacio = 1; espacio <= altura - fila; espacio++) {
                espacios += " ";
            }

            let numeros = "";
            for (let numero = 1; numero <= fila; numero++) {
                numeros += numero + " ";
            }

            console.log(espacios + numeros);
        }

        console.log("\nPiramide invertida:");

        // Se comienza en la altura y se disminuye hasta llegar a 1.
        for (let fila = altura; fila >= 1; fila--) {
            let espacios = "";

            for (let espacio = 1; espacio <= altura - fila; espacio++) {
                espacios += " ";
            }

            let numeros = "";
            for (let numero = 1; numero <= fila; numero++) {
                numeros += numero + " ";
            }

            console.log(espacios + numeros);
        }
    }

    lector.close();
}

iniciar();
