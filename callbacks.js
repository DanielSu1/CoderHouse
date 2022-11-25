// Crear un callback es llamar a una función como parametro.
/* const ejecutar = unaFuncion => unaFuncion()
const saludar = () => console.log('Saludos')
const despedir = () => console.log('Adíos')
ejecutar(saludar);
ejecutar(despedir); */

/* setTimeout(()=> console.log(`A ver`), 2000);
setTimeout(()=> console.log(`callback`), 1000);
console.log(`Hola mundo.`) */

/* const fs = require('fs');

const data =fs.readFile('./test-input-sync.txt','utf-8',(error,contenido)=>{
    if(error){
        // hubo un error, no se puede leer
    }
    else{
        console.log(contenido)
        //no hubo errores
    }
});

fs.writeFile('./test-input-sync.txt','Sobreescribiendo\n',error=>{
    if(error){
        // hubo un error, no se puede leer
    }
    else{
        console.log('Guardado')
        //no hubo errores
    }
})
fs.appendFile('./test-input-sync.txt','otro agregado\n',error=>{
    if(error){
        // hubo un error, no se puede leer
    }
    else{
        console.log('Guardado')
        //no hubo errores
    }
}) */

