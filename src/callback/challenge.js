/**
 * APUNTES !!
 * XMLHttpRequest es la forma antigua de hacer llamados
 * 
 * hacer una peticion
 * obtener cuantos personajes
 * acceder al primer personajes 
 * ver en que dimension se encuentra
 */



/**
 * PREVIAMENTE INSTALAMOS UNA DEPENDENCIA "npm install xmlhttprequest --save"
 */

// la instanciamos en este proyecto
/**la requerimos con 'require' que recibe lo que acabamos de instalar 
 * y al final usamos el valor para hacer instancias que es "XMLHttpRequest"
*/
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//LA API A CUAL SE HARA LA PETICION
let API = 'https://rickandmortyapi.com/api/character/'


//TRAER LA INFORMACION DE LA API 

/**recibe la api y una funcion */
function fetchData(url_api, callback) {
    //generar la referencia al objeto
    let xhttp = new XMLHttpRequest();

    /**hacer un llamado a una url_api 
     * le pasamos cual va a ser nuestra peticion (lo que queremos hacer)
     * la url donde obtendremos
     * y el tercer valor es si queremos que sea de forma asincrona
    */
    xhttp.open('GET', url_api, true);
    
    /**Escuchamos lo que hara la peticion con on readystatechange 
     * recibira un elemento (no siempre)
     */
    xhttp.onreadystatechange = function (event) {
        /**aqui haremos una validacion par saber si ejecutare mi call
         * 
         * queremos ver si esta conexion se completo con readyState
         */
        if(xhttp.readyState === 4){
            /** saber el status en el cual se encuentra con 200 que quiere decir 
             * que todo esta bien
             */
            if(xhttp.status === 200 ){
                /**ahora si regresamo el callback
                 * primer valor es el error en
                 * y el segundo lo que se desencadena
                 * 
                 * como el resultado
                 *  es json se parce porque recibes una respuesta en texto
                 * si no se parcea se manda solo un string por lo que no se podra iterar sobre el 
                 */
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                //aqui mandamos el error si es que hay un error
                const error = new Error('Error' + url_api)
                return callback(error, null)
            }
        }
    }
    //se envia la solicitud
    xhttp.send();
}
//Nuestro callback que se va a ejecutare/
/**primer valor es la url de la api,
 * segundo valor que recibe es el callback funcion que recibe
 * como primer parametro un error y como segundo el data1, porque
 * usaremos esta funcion varias veces de forma anidada*/
fetchData(API, function(error1,data1){
    //una validacion para que no haya errores en el data1
    if(error1) return console.error(error1)
    /**si funciona usamos a fetch data pero le pasamos el resultado 
     * del primer personaje y como segundo valor pasamos una funcion  */
    fetchData(API + data1.results[0].id,function(error2,data2){
        //validacion si hay un error
        if(error2) return console.error(error2)
        //la tercer peticion con data3
        fetchData(data2.origin.url, function (error3, data3){
            //manejammos errores
            if(error3) return console.error(error3)
            //imprimimos la informacion en la consola
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})


/**PREGUNTA DE EXAMEN:
Es recomendable de no realizar mas de 3 callback
 para no caer en un callback Hell, si tu proyecto 
 tiene una funcion con mas de 3 callback, se recomienda 
 hacer una revision y utilizar una mejor forma de ejecutar el codigo,
 para ello estan las promesas o el Async Away */