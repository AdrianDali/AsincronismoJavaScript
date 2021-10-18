let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//TRAER LA INFORMACION DE LA API ECMASCRIPT 6

/**recibe la api y una funcion */
const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    //generar la referencia al objeto
    const xhttp = new XMLHttpRequest();

    /**hacer un llamado a una url_api
     * le pasamos cual va a ser nuestra peticion (lo que queremos hacer)
     * la url donde obtendremos
     * y el tercer valor es si queremos que sea de forma asincrona
     */
    xhttp.open("GET", url_api, true);

    /**Escuchamos lo que hara la peticion con on readystatechange
     * recibira un elemento (no siempre)
     */
    xhttp.onreadystatechange =  (()=> {
      /**aqui haremos una validacion par saber si ejecutare mi call
       *
       * queremos ver si esta conexion se completo con readyState
       */
      if (xhttp.readyState === 4) {
        /** saber el status en el cual se encuentra con 200 que quiere decir
         * que todo esta bien
         * con if ternario
         */
        xhttp.status === 200 
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("error ", url_api));
      }
    });
    //se envia la solicitud
    xhttp.send();
  });
};

module.exports = fetchData;