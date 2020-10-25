/*For
- a)Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
- b)Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
- c)Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
- d)Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).*/
alert('**Exercise 5: For**');

//A
console.log('****A****');
var palabras = ['bota', 'botella', 'regalo', 'heladera', 'computadora'];
for (var i = 0; i < palabras.length; i++) {
    alert('a) Palabra '+i+' = '+palabras[i]);
};

//B
console.log('****B****');
for (var i = 0; i < palabras.length; i++) {
    var temp = palabras[i].toUpperCase();
    temp = temp.substring(0, 1);
    temp += palabras[i].toLowerCase();
    palabras[i] = temp.substring(0, 1) + temp.substring(2);
    alert('b) Palabra '+i+' = '+palabras[i]);
};

//C
console.log('****C****');
var sentence = '';
for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i];
};
alert('c) Final string = '+sentence);

//D
console.log('****D****');
var array = [];
for (var i = 0; i < 10; i++) {
    array.push(i);
};
console.log('d) '+array);

