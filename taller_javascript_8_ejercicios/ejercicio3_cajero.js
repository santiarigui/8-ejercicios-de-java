// Ejercicio 3: Simulador de cajero automatico
// Permite consultar saldo, retirar, consignar y salir del programa.

const readline = require("node:readline/promises");
const { stdin: entrada, stdout: salida } = require("node:process");

async function iniciar() {
    const lector = readline.createInterface({ input: entrada, output: salida });

    let saldo = 500000;
    let retiros = 0;
    let opcion = "";

    // El menu se repite hasta que el usuario elija salir.
    while (opcion !== "4") {
        console.log("\n===== CAJERO AUTOMATICO =====");
        console.log("1. Consultar saldo");
        console.log("2. Retirar dinero");
        console.log("3. Consignar dinero");
        console.log("4. Salir");

        opcion = (await lector.question("Seleccione una opcion: ")).trim();

        if (opcion === "1") {
            console.log(`Su saldo actual es: $${saldo.toLocaleString("es-CO")}`);
        } else if (opcion === "2") {
            if (retiros >= 3) {
                console.log("Ya alcanzo el limite de 3 retiros del dia.");
            } else {
                const retiro = Number(await lector.question("Ingrese el valor que desea retirar: "));

                if (!Number.isFinite(retiro) || retiro <= 0) {
                    console.log("Error: ingrese un valor valido mayor que cero.");
                } else if (retiro > saldo) {
                    console.log("No tiene saldo suficiente para realizar el retiro.");
                } else {
                    saldo -= retiro;
                    retiros++;
                    console.log(`Retiro exitoso. Saldo restante: $${saldo.toLocaleString("es-CO")}`);
                    console.log(`Retiros realizados: ${retiros} de 3.`);
                }
            }
        } else if (opcion === "3") {
            const consignacion = Number(await lector.question("Ingrese el valor que desea consignar: "));

            if (!Number.isFinite(consignacion) || consignacion <= 0) {
                console.log("Error: ingrese un valor valido mayor que cero.");
            } else {
                saldo += consignacion;
                console.log(`Consignacion exitosa. Nuevo saldo: $${saldo.toLocaleString("es-CO")}`);
            }
        } else if (opcion === "4") {
            console.log("Gracias por utilizar el cajero.");
        } else {
            console.log("Opcion no valida. Intente nuevamente.");
        }
    }

    lector.close();
}

iniciar();
