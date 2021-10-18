//importamo fetchData 
const fetchData = require("../utils/fetchData");
//ruta de la api
let API = 'https://rickandmortyapi.com/api/character/'

//empezamos a resolver las peticiones
fetchData(API)
    .then(data => {
        //mostramos
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })

    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => {console.log("ERROR" + err)})