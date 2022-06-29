//⭐ Fetch:
// Nos permite realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verboso.

// Básicamente llamamos a Fetch y le pasamos como parámetro la URL de la petición.


import fetch from 'node-fetch';
//traemos la API
const API='https://api.escuelajs.co/api/v1';


//LA FUNCIÓN QUE RECIBE LA URL DE LA API QUE QUEREMOS LLAMAR, Y ME RETORNA UNA PROMESA
//Obtenemos información de la api para leer los fatos
function fetchData(urlApi){
    return fetch(urlApi);
};

//Ahora sigue el llamado 
fetchData(`${API}/products`)
//esto es para saber que hay en su respuesta. Json para transformar la inf a un obj json

.then(response=>response.json())

//quiero mostrarlo que incluye, en este caso los productos. 
.then(products=>{
    console.log (products)
    //para llmar la 2 petición, aun producto en particular, sólo el primer de los elementos
    return fetchData(`${API}/products/${products[0].id}`)})

    //tenemos respuesta de la solicitud y la transformamos en obj
    .then(response=>response.json())
    
    //para tener un producto y mostrarlo nuevamente, ahora quiero acceder a la categoria 
.then(product=>{
        
    console.log (product.title)  
    return fetchData(`${API}/categories/${product.category.id}`)})
    
    //tenemos otra respuesta y para leerla la transformamos en obj
.then(response=>response.json())
    
    //Mostramos la información. 
.then(category=>{
    
    console.log(category.name);
})
    
    .catch(err=>console.log(err))
    
    .finally(()=>console.log('Finally'));