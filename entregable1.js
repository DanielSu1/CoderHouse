class Usuario {
    constructor(nombre, apellido, libros = [{nombre, autor}], mascotas = []){
        this._nombre = nombre;
        this._apellido = apellido;
        this._libros = libros;
        this._mascotas = mascotas; 
    }
    getFullName(){
        return `Nombre : ${this._nombre} -Apellido: ${this._apellido} -Libros: ${this._libros}, -Mascotas: ${this._mascotas}`;
    }
    addMascota(animal){
        this._mascotas.push({animal});
    }
    countMascotas(cantidad){
        cantidad = this._mascotas.length;
        console.log(`Cantidad de mascotas ${cantidad} `);
    }
    addBook(nombreLibro, autorLibro){
    this._libros.push({ nombre: nombreLibro, 
    autor: autorLibro});
    }
    getBookNames(){
        console.log(`El nombre de los libros son: ${this._libros[0]}`)
        
    }
}
const user = new Usuario('Daniel', 'Sulaiman', ['Nada','Carmen Laforet' ],['Perro']);
console.log(user.getFullName());  
console.log(user.countMascotas());    
console.log(user.getBookNames()); 