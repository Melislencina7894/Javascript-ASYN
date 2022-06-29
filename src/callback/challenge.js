
//Para obtener el JSON se utilizará un API llamado XMLHttpRequest 
// (a menudo llamado XHR). Éste en un objeto JavaScript muy útil que 
// permite realizar solicitudes de red para recuperar recursos desde 
// un servidor vía JavaScript (por ejemplo: imágenes, texto, JSON, 
// incluso código HTML), con lo que es posible actualizar pequeñas 
// secciones de contenido sin tener que volver a cargar la página entera.
// Con ello se obtienen páginas web más interactivas, pero está fuera del
// alcance de este artículo entrar en detalle.

// 1 Para empezar, se debe almacenar la URL del JSON que se quiere recuperar
//  en una variable. Agregue lo siguiente al final del código JavaScript:


const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//se crea una variable que haga referencia a este recurso. Es la referencia 
// que no cambia en los archivos. Traemos una cadena de string. 
const API = 'https://api.escuelajs.co/api/v1';

//Implementación para llamado a solicitud más moderna. Pasamos linea 2, 
// y el 2 argumento, es la inf la data o el error que pueda entregar la llamada.
function fetchData(urlApi, callback) {
           //para controlar el flujo del llamado. Ya estaba instanciado arriba.
           //Para entender que hay distintas formas las peticiones. 
  let xhttp = new XMLHttpRequest();

  //Trabajamos con los elementos que nos entrega
  // abrimos conexion a la api . Obtener, la url y el valor de true para habilitar 
  xhttp.open('GET', urlApi, true);
  //es para escuchar los dif estados de la información
  // y saber cuando está disponible la información. La function recibe un 
  //evento y dentro validamos el tipo de estado que se encuentra. 
  xhttp.onreadystatechange = function (event) {
    // el elemento 4, es cuando se completó la llamada, es cuando está completa la inf.
    if (xhttp.readyState === 4) {
        //queremos validar que el servidor respondió de forma correcta. 
      if(xhttp.status === 200) {
        //pasamos dos valores, un nulo y una transformación de la inf. En respose
        //lo que entrega el servidor en texto, pero lo queremos en json, en objeto. 
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        //lógica para el manejo de información cuando haya error. Pasamos un nombre
        // y un valor, para decir que el error fue en un elemento de la api
      const error = new Error('Error' + urlApi);
      //pasamos el valor de error y el valor de nulo. 
      return callback(error, null);
    } 
    }
  }
  //hacemos este llamado para que se ejecute la lógica. 
  xhttp.send();
}

//queremos traer los productos de un e-comerce

//Línea 1 para hacer solicitudes, controlar los estados, status
// mostrar el llamado de forma correcta. Creamos la funciín 
// y llamarla. 


//En estas funciones anidadas nos encontramos con 3 peticiones. 
//Los argumentos que recibe son una api (línea 2) para
//  traer productos y una función callback. 
fetchData(`${API}/products`, function (error1, data1) {
    //si tengo error, que me retorne error 1. 
    if (error1) return console.error(error1);
    //volver a llamar a fetchdata con otra lógica, cuando la petición fue correcta dispongo de inf, 
    //quiero un producto en particular
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        //para validar el error 2, en la 2 petición
      if (error2) return console.error(error2);
        //argumentos, quiero ir a la categoría del 2 llamado, es un producto en particular
      fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title); //de la 2 petición quiero el título
        console.log(data3.name); //de la 3 el nombre. 
      });
    });
  });