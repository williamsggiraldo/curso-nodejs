// Se ejecuta 1
console.log('Inicio del programa');

// Se ejecuta 5
setTimeout( function() {
    console.log('Primer timeout');
}, 3000);

// Se ejecuta 3
setTimeout( function() {
    console.log('Segundo timeout');
}, 0);

// Se ejecuta 4
setTimeout( function() {
    console.log('Tercer timeout');
}, 0);

// Se ejecuta 2
console.log('Fin del programa');