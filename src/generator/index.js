//para parar la solicitud 


function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  //para llamar a cada uno de ellos
  const g = gen();
  //next para iterar dentro de los elementos
  console.log(g.next().value);
  console.log(g.next().value);
  console.log(g.next().value);
  
  
  function* iterate(array) {
    for (let value of array) {
      yield value
    }
  }
  
  const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);


//   import fetch from "node-fetch";
// const API = 'https://api.escuelajs.co/api/v1';

// async function fetchData (urlApi) {
//     const response = await fetch(urlApi);
//     const data = await response.json();
//     return data;
// }

// async function* solicitudData (urlApi)  {
//     try {
//         const products = await fetchData(`${urlApi}/products`);
//         const product = await fetchData(`${urlApi}/products/${products[0].id}`);
//         const category = await fetchData(`${urlApi}/categories${product.category.id}`);
    
//         yield console.log(products);
//         yield console.log(product.title);
//         yield console.log(category.name);
//     } catch (error) {
//         console.error(error);
//     }
// }

// const iterable = solicitudData(API);

// iterable.next().value;
// iterable.next().value;
// iterable.next().value;