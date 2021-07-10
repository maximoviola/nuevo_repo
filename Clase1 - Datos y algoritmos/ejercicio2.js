var precioDePrenda;
var porcentajeDeAumento;
var precioFinal;

precioDePrenda = 3000;
porcentajeDeAumento = 40;
precioFinal = precioDePrenda + (precioDePrenda * porcentajeDeAumento) / 100;
if (precioFinal > 4000) {
  console.log("El precio final es: " + precioFinal);
  console.log("Precio Excedido");
} else console.log("El precio final es: " + precioFinal);
