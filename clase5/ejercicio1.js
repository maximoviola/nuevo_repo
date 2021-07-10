console.clear()
let usuarios = [
    {
        nombre: 'Lucas',
        edad: 27
     },
    {
        nombre: 'maison',
        edad:17
    }
    ]
    //dado un aray de usuarios, indicar si existe un usuario llamado lucas.
    
    let estalucas = false;
    
    for (let i = 0; i<usuarios.length; i++){
        let usuario = usuarios[i]
    
        if (usuario.nombre=== 'Lucas') {
            estalucas = true;
        }
        console.log(estalucas)
    }