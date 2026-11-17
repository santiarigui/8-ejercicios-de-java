# Taller de JavaScript: if, for y while

Solucion de los cinco ejercicios que aparecen en el PDF `Taller_If_for_while.pdf`.

## Requisitos

- Node.js 18 o superior.
- No se necesitan instalar dependencias externas.

## Como ejecutar

Abre una terminal en esta carpeta y ejecuta el ejercicio que quieras:

```bash
node ejercicio1_triangulos.js
node ejercicio2_contrasena.js
node ejercicio3_cajero.js
node ejercicio4_piramide.js
node ejercicio5_adivinanza.js
```

Tambien puedes usar los comandos de `npm`:

```bash
npm run ejercicio1
npm run ejercicio2
npm run ejercicio3
npm run ejercicio4
npm run ejercicio5
```

## Descripcion de los ejercicios

1. **Clasificador de triangulos:** valida que los lados sean positivos y cumplan la desigualdad triangular; clasifica el triangulo como equilatero, isosceles o escaleno.
2. **Validador de contrasena:** recorre la cadena con `while` y `charAt`; comprueba longitud, mayuscula, digito y caracter especial.
3. **Cajero automatico:** utiliza un menu repetitivo con `while`; permite consultar saldo, retirar (maximo tres veces), consignar y salir.
4. **Piramide numerica:** imprime la piramide ascendente y la invertida; utiliza contadores para centrar las filas.
5. **Juego de adivinanza:** genera un numero aleatorio entre 1 y 100 y permite hasta siete intentos.

## Notas

- Cada ejercicio esta en un archivo independiente para que sea facil ejecutarlo y revisarlo.
- Los programas solicitan los datos por consola.
- En el ejercicio 5, la pista de cercania se interpreta asi: diferencia mayor que 10 = **Muy frio**; diferencia de 10 o menos = **Muy caliente**.
