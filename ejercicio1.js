const dato = {
    Nombre: 'Pepe',
    Edad: 25,
    Precio: 99.09,
    Series: ['Dark', 'Mr Robot', 'Castlevania'],
    Peliculas: ['Spirit', 'Como la primera vez', 'Spiderman 3']
}
/*console.log(dato);
 */
for (cliente in dato){
    console.log(cliente);
    console.log(dato[cliente]);
}
if (true){
    dato.Edad++
    dato.Series.push('The Big Bang Theory');
    console.log('Edad ahora es: ', dato.Edad, 'Y su sus series son: ', dato.Series);
}