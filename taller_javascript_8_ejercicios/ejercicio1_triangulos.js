// Ejercicio 1: Clasificador de triangulos
// Solicita tres lados, valida si forman un triangulo y lo clasifica.

const readline = require("node:readline/promises");
const { stdin: entrada, stdout: salida } = require("node:process");

async function iniciar() {
    const lector = readline.createInterface({ input: entrada, output: salida });

    const lado1 = Number(await lector.question("Ingrese el primer lado: "));
    const lado2 = Number(await lector.question("Ingrese el segundo lado: "));
    const lado3 = Number(await lector.question("Ingrese el tercer lado: "));

    // Los lados deben ser numeros positivos.
    if (
        !Number.isFinite(lado1) || !Number.isFinite(lado2) || !Number.isFinite(lado3) ||
        lado1 <= 0 || lado2 <= 0 || lado3 <= 0
    ) {
        console.log("Error: ingrese valores numericos mayores que cero.");
    } else if (
        lado1 + lado2 > lado3 &&
        lado1 + lado3 > lado2 &&
        lado2 + lado3 > lado1
    ) {
        // Si los tres lados son iguales, es equilatero.
        if (lado1 === lado2 && lado2 === lado3) {
            console.log("El triangulo es equilatero.");
        } else if (
            lado1 === lado2 ||
            lado1 === lado3 ||
            lado2 === lado3
        ) {
            // Si dos lados son iguales, es isosceles.
            console.log("El triangulo es isosceles.");
        } else {
            // Si todos son diferentes, es escaleno.
            console.log("El triangulo es escaleno.");
        }
    } else {
        console.log("Error: los valores ingresados no forman un triangulo.");
    }

    lector.close();
}

iniciar();
