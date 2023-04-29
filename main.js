/*
Diseña una función que reciba como argumento una lista de números enteros. El script devolcerá una lista con los mismos valores pero insertando un 0 después de cada número par de la lista

Si la lista está vacía devolverá un array vacío. No debe modificar la lista array original.

Por ejemplo 

insertar([2,4,5,7]  // [2,0,4,0,5,7]

insertar([1,4,7,8]  // [1, 4, 0, 7, 8, 0]


- Diagrama de flujo:
1. Crear un array de numeros enteros.
2. Recorrer el array y si es un numero par, hacer un push del numero 0.
3. Condicional dentro de esta funcion que si es NULL la lista, devuelva el array vacío.
*/

const originalArray = [2, 4, 5, 7];
const finalArray = [];

const getNewArray = (originalArray) => {
  // bucle for
  for (let i = 0; i < originalArray.length; i++) {
    const pepino = originalArray[i];
    finalArray.push(pepino);
  }
  console.log(finalArray);
};

getNewArray(originalArray);
