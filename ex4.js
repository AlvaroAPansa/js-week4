/*If Else
- a)Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
- b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
    *“Bebe” si la edad es menor a 2 años
    *“Nino” si la edad es entre 2 y 12 años
    *“Adolecente” si la edad es entre 13 y 19 años
    *“Joven” si la edad está entre 20 y 30 años
    *“Adulto” entre 31 y 60 años
    *“Adulto mayor” entre 61 y 75 años
    *“Anciano” si es mayor a 75 años*/
alert('**Exercise 4: If Else**');

//A
console.log('****A****');
var num1 = Math.random();
if (num1 >= 0.5) {
    alert('a) The number is: '+num1+'. It is grater than 0.5.')
} else {
    alert('a) The number is: '+num1+'. It is lower than 0.5.')
};

//B
console.log('****B****');
var age = Math.floor(Math.random() * 101);
if (age < 2) {
    alert('b) Age = '+age+'. Bebe.')
} else if (age >= 2 && age <= 12) {
    alert('b) Age = '+age+'. Nino.')
} else if (age >= 13 && age <= 19) {
    alert('b) Age = '+age+'. Adolescente.')
} else if (age >= 20 && age <= 30) {
    alert('b) Age = '+age+'. Joven.')
} else if (age >= 31 && age <= 60) {
    alert('b) Age = '+age+'. Adulto.')
} else if (age >= 61 && age <= 75) {
    alert('b) Age = '+age+'. Adulto mayor.')
} else {
    alert('b) Age = '+age+'. Anciano.')
};