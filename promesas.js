const datos = [{
    id: 1,
    title: 'Iron Man',
},
{
    id: 2,
    title: 'Spiderman'
},
{
    id: 3,
    title: 'Batman'
}];
//Promesa con .then------------------------
/* const getDatos = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(datos)
        },1500);
    }
    )
}
getDatos().then((datos)=> console.log(datos)) */

//Segunda forma de mostrar datos con funcion asincrona.------------ 
/* const getDatos = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(datos)
        },1500);
    }
    )
}
async function obtenerDatos(){
    const datosArray = await getDatos();
    console.log(datosArray);
}
obtenerDatos(); */

//Encadenamiento de promesas

/* new Promise(function(resolve, reject){
    setTimeout(()=> resolve(2), 1000); // promesa con su parametro en valor 2 y accion de 1 segundo
})
.then(resultado =>{
    console.log(resultado); //2
    return resultado * 2; //4
})
.then(resultado=>{
    console.log(resultado); //4
    return resultado * 2 //8
})
.then(resultado=>{
    console.log(resultado);
    return resultado * 2;
})
.then(console.log) */

//Actividad #2 Asincronismo y callbacks
const mostrarLetras = (palabra)=>{
   let resultado = palabra;
    for (i = 0; i < resultado.length; i++){
        console.log(resultado[i]);
    }
}
setTimeout(()=> console.log(`A ver`), 2000);
setTimeout(()=> console.log(`callback`), 1000);
console.log(`Hola mundo.`) 
console.log(mostrarLetras('Daniel'));