//Una promesa tiene tienen 3 estados:

// Pendiente
// Cumplido
// Rechazado

//la función anónima que regresa dos funciones, para saber el estado como se encuentra. 
// según sea el caso regresar la inf al usuario. 
const promise = new Promise(function (resolve, reject) {
    //se puede mostrar con éxito la inf usuario, mostrando que todo fue correcto
    resolve('hey!')
  });
  
  // creamos una nueva promesa, tenemos una const para asignar el 
  // valor de vacas. Para ver si podemos cumplir o no con la demanda
  //de vacas que nos piden. 
  const cows = 15;
  
  const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
      resolve(`We have ${cows} cows on the farm`);
    } else {
        //en caso de no tener el mínimo esperado de vacas
      reject("There is no cows on the farm");
    }
  });
  
// el then para anidar solicitudes encadenadas. Then para leer el valor luego de que te responda
  countCows.then((result) => {
    console.log(result);
    //el cath se usa para el reject, cuando no se cumple con la promesa
  }).catch((error) => {
    console.log(error);
    //cuando ya terminó la ejecución. 
  }).finally(() => console.log('Finally'));



//   const cows = 9; EN CASO DE TENER MENOS VACAS 
  
//   const countCows = new Promise(function (resolve, reject) {
//     if (cows > 10) {
//       resolve(`We have ${cows} cows on the farm`);
//     } else {
//         //en caso de no tener el mínimo esperado de vacas
//       reject("There is no cows on the farm");
//     }
//   });
  

//   countCows.then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   }).finally(() => console.log('Finally'));