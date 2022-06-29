//asyn es una función asíncrona

//creamos una promesa, validamos que va a ser resuelta, luego hacemos elllamado para
//ver como se resuelve el concepto de away


const fnAsync = () => {
    return new Promise((resolve, reject) => {
        //if ternario, para crear validaciones amigables
      (true)
        ? setTimeout(() => resolve('Async!!'), 2000)//sentencia verdadera
        : reject(new Error('Error!'));
    });
  }
  
  //funcion que utiliza el concepto de async 
  const anotherFn = async () => {
    //usamos await 
    const somethig = await fnAsync();
    //hacemos el llamado de la función, nos regresa una promesa, una vez 
    //resuelta muestra la información. Para trabajar con múltiples elementos. 
    console.log(somethig);
    console.log('Hello!');
  }
  

  console.log('Before');
  anotherFn(); //tarda 2 seg para ser ejecutada 
  console.log('After');

//   //rta before
//   after
//   async
//   hello //espera a que se ejecute un resolve o reject y ahí se puede 
//  mostrar. 
