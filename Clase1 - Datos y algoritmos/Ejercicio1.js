console.clear

let huevos = 3

let chocolate = 1
let harina = 0.5
let cucharadasDeAzucar =5

if (huevos < 3){
    console.log ("tenes que comprar " + (3 - huevos) + " huevos")
}
if (chocolate < 1){
    console.log( "tenes que comprar " + (1-chocolate) + " chocolate")
}
if (harina < 0.5){
    console.log("tenes que comprar " + (0.5- harina) + " Grs de harina")
}
if (cucharadasDeAzucar < 5){
    console.log ("tenes que comprar " + (5-cucharadasDeAzucar) + " cucharadas de azucar")
}


if (huevos < 3 || chocolate < 1 || harina < 0.5 || cucharadasDeAzucar < 5){
    console.log("No podes hacer las galletitas hasta que consigas todos los ingredientes mencionados")

} else {
    console.log("Podes cocinar las galletitas. Tenés todos los ingredientes")
}


