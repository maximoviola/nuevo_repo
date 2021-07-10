/*  1. Hacer una función que reciba un numero y que retorne verdadero si es par o falso en caso
contrario.
2. Hacer una función que reciba una serie de palabras separadas por espacios y que imprima
la misma frase pero en orden inverso.
3. Hacer una función que reciba como parámetro tres números enteros y que lo ordene de
mayor a menor. */

/*
function numero(n){
    
  
   if (n % 2 === 0) {
      return console.log("El numero es Par");
   }else{
       return console.log("El numero es impar");
   }
    
   
}
 
console.log(numero(3)) */

/*
function sumar(parametro1, parametro2, rw){
   return parametro1 + parametro2 - rw;
}

var pito1= 4
var pito2=6
var pito3=7
var pito4=4

var resultado =  sumar(pito1,pito2, pito3, pito4)

console.log(resultado)
*/

function duda(n){
      if (n%2===0) {
      resultado = "es par"
   }else{
      resultado = "es impar"
   }
   return resultado
}


console.log(duda(1))