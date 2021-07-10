/* 4) La secuencia de Fibonacci
En matemáticas, la sucesión o serie de Fibonacci es la 
siguiente sucesión infinita de números naturales:
0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 
La sucesión comienza con los números 0 y 1,a partir de estos
cada término es la suma de sus dos anteriores
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir tantos terminos de la secuencia como repeticions de 0 hasta limite
Ejemplo: si limite = 6, imprimir 0, 1, 1, 2, 3, 5 */

var n1 = 0
var n2 = 1
var final = 50
var n3 = n1 + n2
var i = 2
console.log(n1)
console.log(n2)
while (i<final){
var n3 = n1 + n2

console.log(n3)
n1 = n2
n2 = n3
i++

}