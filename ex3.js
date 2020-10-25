/*Arrays
- a)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
- b)Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
- c)Agregar un elemento al principio y al final del array (utilizar unshift y push).
- d)Quitar un elemento del principio y del final del array (utilizar shift y pop).
- e)Invertir el orden del array (utilizar reverse)
- f)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
- g)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
console.log('**Exercise 3: Arrays**');

//A
console.log('****A****');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
'Noviembre', 'Diciembre'];
console.log('Answer: '+months[5]+', '+months[11]);

//B
console.log('****B****');
months.sort();
console.log(months);

//C
console.log('****C****');
months.unshift('Primero');
months.push('Ultimo');
console.log(months);

//D
console.log('****D****');
months.shift();
months.pop();
console.log(months);

//E
console.log('****E****');
months.reverse();
console.log(months);

//F
console.log('****F****');
monthsString = months.join('-');
console.log(monthsString);

//G
console.log('****G****');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
'Noviembre', 'Diciembre'];
arrayG = months.slice(months.indexOf('Mayo'), (months.indexOf('Noviembre')+1));
console.log(arrayG);