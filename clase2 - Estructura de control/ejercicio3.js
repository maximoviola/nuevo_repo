/*3) Contador 2: La venganza del contador
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
Se llega a limite
La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
anteriormente creada llamada final
Al final del recorrido imprimir la cantidad de numeros multiplos de 3
Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se
termine el recorrido */

var limite = 50;
var final = 100;
var cantPares;
var multiploDe3;
var sumaFinal;
var contador = 0;
while (contador <= limite || cantPares <= final) {
  sumaFinal = sumaFinal + contador;
  if (contador % 2 == 0) {
    cantPares++;
    if (contador % 3 == 0) {
      multiploDe3++;
    }
  }
}
console.log("La cantidad multiplo de 3 son: " + multiploDe3);
console.log("la suma de todos los numeros de 0 al limite es: " + sumaFinal);