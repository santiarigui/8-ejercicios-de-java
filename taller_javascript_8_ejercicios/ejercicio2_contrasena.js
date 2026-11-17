// Ejercicio 2: Validador de contrasena
// Recorre la contrasena caracter por caracter usando while y charAt.

const readline = require("node:readline/promises");
const { stdin: entrada, stdout: salida } = require("node:process");

async function iniciar() {
    const lector = readline.createInterface({ input: entrada, output: salida });
    const contrasena = await lector.question("Ingrese una contrasena: ");

    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneEspecial = false;
    let posicion = 0;

    // Se revisa cada caracter de la contrasena.
    while (posicion < contrasena.length) {
        const caracter = contrasena.charAt(posicion);

        if (caracter >= "A" && caracter <= "Z") {
            tieneMayuscula = true;
        }

        if (caracter >= "0" && caracter <= "9") {
            tieneDigito = true;
        }

        if ("!@#$%^&*".includes(caracter)) {
            tieneEspecial = true;
        }

        posicion++;
    }

    const longitudValida = contrasena.length >= 8;

    console.log("\nResultado de la validacion:");
    console.log(`${longitudValida ? "Cumple" : "No cumple"}: tener al menos 8 caracteres.`);
    console.log(`${tieneMayuscula ? "Cumple" : "No cumple"}: tener al menos una mayuscula.`);
    console.log(`${tieneDigito ? "Cumple" : "No cumple"}: tener al menos un digito.`);
    console.log(`${tieneEspecial ? "Cumple" : "No cumple"}: tener al menos un caracter especial (!@#$%^&*).`);

    if (longitudValida && tieneMayuscula && tieneDigito && tieneEspecial) {
        console.log("La contrasena es valida.");
    } else {
        console.log("La contrasena no cumple todos los requisitos.");
    }

    lector.close();
}

iniciar();
