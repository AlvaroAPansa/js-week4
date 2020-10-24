/* 2) Strings
- a)Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
- b)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
- c)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
- d)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
- e)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
- f)Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
console.log('**Exercise 2: Strings**');

//A
console.log('****A****');
var string1 = 'upper-case-string';
string1 = string1.toUpperCase();
console.log(string1);

//B
console.log('****B****');
var string2 = 'IceCreamParlor';
console.log('The complete string is: '+string2);
subString2 = string2.substring(0, 5);
console.log('Its first 5 characters: '+subString2);

//C
console.log('****C****');
var string3 = 'MoonageDaydream';
console.log('The complete string is: '+string3);
subString3 = string3.substring(string3.length - 3);
console.log('Its last 3 characters: '+subString3);

//D
console.log('****D****');
var string4 = 'ladyStardust';
console.log('The complete string is: '+string4);
answer4 = string4.toUpperCase();
answer4 = answer4.substring(0, 1);
answer4 += string4.toLowerCase();
answer4 = answer4.substring(0, 1) + answer4.substring(2);
console.log('The requested answer: '+answer4);

//E
console.log('****E****');
var string5 = 'Suffragatte City';
console.log('The complete string is: '+string5);
spaceIndex = string5.indexOf(' ');
console.log('The index of the space is: '+spaceIndex);

//F
console.log('****F****');
var string6 = 'suFfraGaTe reColEctIon';
console.log('The complete string is: '+string6);
string6Up = string6.toUpperCase();
string6Low = string6.toLowerCase();
answer6 = string6Up.substring(0, 1) + string6Low.substring(1, string6Low.indexOf(' '))
+ string6Up.substring(string6Up.indexOf(' '), (string6Up.indexOf(' ')+2))
+ string6Low.substring((string6Up.indexOf(' ')+2));
console.log('The requested answer: '+answer6);

