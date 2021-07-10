//ejercicio3

var cantidadDeRepartidores = 10;
var gananciaDelDia = 10000;
var totalSueldoRepartidores;
var porcentajeParaSueldos;
var sueldoNetoDelRepartidor;
var gananciaDelComercioFinal;
var feriado = false;

if (feriado === true) {
  porcentajeParaSueldos = 80;
} else {
  porcentajeParaSueldos = 65;
}

totalSueldoRepartidores = gananciaDelDia * porcentajeParaSueldos / 100;
sueldoNetoDelRepartidor = totalSueldoRepartidores / cantidadDeRepartidores;
gananciaDelComercioFinal = gananciaDelDia - totalSueldoRepartidores;

console.log("El sueldo Neto de cada repartidor es: " + sueldoNetoDelRepartidor);
console.log("El comercio gana: " + gananciaDelComercioFinal);

