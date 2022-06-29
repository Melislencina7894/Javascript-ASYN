import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//para reteronar la informar transformada en objeto
async function fetchData(urlApi) {
    //hacemos el uso del fetch
  const response = await fetch(urlApi);
  //transformamos datos en json 
  const data =  await response.json();
  //es la inf de la api, implementando la lógica de await 
  return data;
}

//solicitudes de todos los productos, producto particular y categorías
//async antes de argumentos, otra forma de usar. 
const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    console.log(products);
    console.log(product.title);
    console.log(category.name);

  } catch (error) {
    console.error(error);
  }
}

anotherFunction(API);


// TRY AND CATCH
// Nos permite crear un bloque para lo que seria el “resolve” con try. Y otro bloque para lo que seria el “reject” con catch. los pasos son los siguientes:
// Hacemos el importe de fetch y llamamos la API

const anotherFuction = async (urlAPI) => {
    try {
        //variables que tienen la asignación de la fectchData. Llamada a todos los productos. 
        const products = await fetchData(`${urlAPI}/products`);
        //quiero que me entregue solo la petición a un elemento. 
        const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
        //solicito la categoría. 
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title)
        console.log(category.name)
        //si alguna de las promesas llega a un reject pasa a catch 
    } catch{
        console.error(error);
    }
}

//la api se prepara para cada uno de los llamados. 
anotherFuction(API)