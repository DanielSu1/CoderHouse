//FUNCIONES Y CLOSURES 
// #1 Si se agrega algo a la lista será mostrada, de lo contrarío se dará el mensaje de lista vacía.
/* function mostrarLista (){
    let lista = [];
    if (lista.length == 0){
        console.log('Lista vacía.')
    }
    else{
        console.log(lista);
    }
}
mostrarLista(); */

// #2 Se crea funcion IIFE con 3 numeros en el parametro como argumentos para después ser mostrados.
/* ((numeros = [1,2,3])=>{
    if (numeros.length == 0){
        console.log('Lista vacía.');
    }
    else{
        console.log(numeros);
    }
})();
 */
//3 Ejercicio duplicar y triplicar numero
/* function crearMultiplicador(numero) {
    return function(numero2){
        return numero * numero2
    }
}
const input = crearMultiplicador(5)
const iniciar = input(2)

function duplicar() {
    let result = iniciar * 2
    console.log(`Resultado: ${result}`)

}
function triplicar() {
    let result = iniciar * 3
    console.log(`Resultado: ${result}`)

}
duplicar();
triplicar(); */

// EJERCICIO DE CLASES 

//1)
class Contador
{
    constructor(Nom_Per, Nom_Cuenta, Dat_Cuenta = [])
    { 
        this._nom_Per = Nom_Per;
        this._nom_Cuenta =  Nom_Cuenta;
        this._dat_Cuenta = Dat_Cuenta;
    }
    obtenerResponsables(){
        return   `RESPONSABLE:  ${this._nom_Per}, CUENTA: ${this._nom_Cuenta}`;
    }
    obtenerCuentaIndividual(){
        return `Cantidad contada en cuenta: ${this._dat_Cuenta.length}`; 
    }
    obtenerCuentaGlobal(sumar){
        sumar = (a,b) => a+b;
        console.log(sumar(3,4));
    }
    contar(){
        //suma 1 al total de cuenta general y a la cuenta global 
    }
}


class Notas extends Contador {
    constructor(Nom_Per, Nom_Cuenta, Dat_Cuenta, Materias){
        super(Nom_Per, Nom_Cuenta, Dat_Cuenta);
        this._Materias = Materias;
    }
    get Nom_Per(){
        return this._nom_Per;
    }
    set Nom_Per(nuevoNom){
        this._nom_Per = nuevoNom;
    }
}
const Matematicas = new Notas('Daniel', 'Educativa', '')





let usuario1 = new Contador('Daniel', 'Ahorros',[100, 400, 300]);
let usuario2 = new Contador('Esteban','Prestamo',600);
console.log(usuario1.obtenerResponsables());
console.log(usuario1.obtenerCuentaIndividual([1,2,3]));
console.log(usuario1.obtenerCuentaGlobal());

