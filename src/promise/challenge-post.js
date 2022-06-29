// Existen métodos creados para diferentes fines y que se pueden usar (en este caso, esta API):

// ‘Get’: Para obtener

// ‘Post’: Enviar

// ‘Put’: Actualizar

// ‘Delete’ Para eliminar.



import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//para agregar información.  
function postData(urlApi, data) {
    //es una solicitud ahora para guardar datos. Pasamos la url a la cual se conectará
  const response = fetch(urlApi, {
    //método enviar. 
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    //cabeceras que enviamos la solicitud para que reconozca. 
    headers: {
      'Content-Type': 'application/json'
    },
    //Información que quiero transmitir en texto. 
    body: JSON.stringify(data)
  });
  return response;
}

//voy a la página copio y pego aquí. Lo puedo cambiar. 
const data = {
  "title": "212",
  "price": 212,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}

//promesa 
//transformamos la url porque queremos usar products
//pasamos data el objeto que transmitimos a la api
postData(`${API}/products`, data)
  .then(response => response.json())
  //la data que ya fue transformada, mostramos inf en objeto. 
  .then(data => console.log(data));