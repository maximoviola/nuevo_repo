let autos=[
    {
        nombre: 'Pablo', costo: $80000, tiempo: 120, repuestos: ['paragolpe','puerta conductor','rueda conductor']
    }

    {
        nombre: 'tomy', costo: $2000, tiempo: 48, repuestos: ['paragolpe']
    }

    {
        nombre: 'juan', costo: $5000, tiempo: 48, repuestos: ['paragolpe']
    }

]
let automascaro = 0
for (let i =0; i<autos.length;i++){
    if (autos.costo > automascaro){
        automascaro = autos[i] 
        return automascaro;
    }

    console.log (automascaro)
}