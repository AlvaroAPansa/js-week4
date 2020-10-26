/*Funciones
- a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
- b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
- c)Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
- d)A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
- e)Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.*/

console.log('**Exercise 6: Funciones**');

//b-d-e
function validation (a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        alert('One of the values introduced is not a number.')
        return NaN;
    } else if (a % 1 !== 0) {
        alert('El primer número ingresado no es un entero')
        return a - (a % 1);
    } else if (b % 1 !== 0) {
        alert('El segundo número ingresado no es un entero')
        return b - (b % 1);
    } else {
        return true;
    }
};
//b-d-e

//a
function suma (a, b) {
    var valid = validation(a, b);
    if (valid === true) {
        return a + b;
    } else {
        return valid;
    }
};

var num1 = Math.floor(Math.random() * 101);
var num2 = true;//Math.floor(Math.random() * 101);
var add = suma(num1, num2);
console.log('First value: '+num1+'. Second Value: '+num2+' Result: '+add);
//a

//C
function validateInteger (a) {
    if (a % 1 === 0) {
        return true;
    } else {
        return false;
    }
};

var num3 = 15.5;
var entero = validateInteger(num3);
console.log('c) ¿El número '+num3+' es entero? '+entero);
//C