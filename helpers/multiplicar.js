const colors = require('colors');
const fs = require('fs');
const crearArchivo = ( base = 5, listar = false, hasta = 20) => {

    return new Promise(( resolve, reject) => {

    
    let salida = '';

    for ( let i = 1; i<=hasta; i++){
    salida += (`${ base } x ${ i } = ${ base * i}\n`);
    }


    if (listar){
        console.log(colors.rainbow('====================='));
        console.log('    Tabla del: ', base );
        console.log(colors.rainbow('====================='));

        console.log(salida);
    }


    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida, );

    resolve(`tabla-${base}.txt`);
        
    })

}

module.exports = {
    crearArchivo
}