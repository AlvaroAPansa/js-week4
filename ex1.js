/* 1)Variables y Operadores

-a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
-b)Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
-c)Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
*/
console.log('Exercise 1: Variables and Operators');

//A
console.log('****A****');
var num1 = 7;
console.log('First number: '+num1);
var num2 = 3;
console.log('Second number: '+num2);
var suma = num1 + num2;
console.log('Add operation: '+num1+' + '+num2+' = '+suma);

//B
console.log('****B****');
var name = 'Radium';
console.log('First String: '+name);
var surname = 'Rocket';
console.log('Second String: '+surname);
var fullName = name+surname;
console.log('Added string: '+fullName);

//C
console.log('****C****');
var string1 = 'Software';
console.log('First String: '+string1);
var string2 = 'Development';
console.log('Second String: '+string2);
var addedChar = string1.length+string2.length;
console.log('Characters addition: '+addedChar);