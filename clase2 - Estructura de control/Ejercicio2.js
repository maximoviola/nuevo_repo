/*2) Contador
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir al final del programa la cantidad de numeros impares
Imprimir al final del programa la cantidad de numeros menores de limite / 2 */ 

x = 30
var contadorMenores = 0;
var CantImpares = 0;
var b = x / 2;

for (var i = 0; i < x; i++)
  if (i % 2 === 1) {
    CantImpares++;
  }

for (var a = 0; a < b; a++) {
  contadorMenores++;
}

console.log("La cantidad de impares es: " + CantImpares);
console.log("La cantidad de numeros menores a " + b + " es " + contadorMenores);
