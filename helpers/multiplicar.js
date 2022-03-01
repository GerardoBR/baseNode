const fs = require('fs');
const colors = require('colors');
const crearArchivo = async ( base = 5, listar= false, hasta= 10  )=>{
    try {
        
        let salida = '';
        for( let i = 0 ; i<= hasta ; i++){
            // for
            salida += `${base} x ${i} = ${base * i } \n`;
        }
        if(listar){
            console.log("===============================");
            console.log(colors.green(`   tabla del ${base}     `));
            console.log("===============================");
            console.log(salida.rainbow );
        }    

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );


        // console.log(`tabla -${base} creada`);
        return   `tabla -${base}.txt`;
    } catch (error) {
        throw error
        // return console.log('ocurrio un error');
    }
   
}

module.exports ={
    crearArchivo
}