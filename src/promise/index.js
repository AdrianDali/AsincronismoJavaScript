/**
 * 
 * Las promesas tienen tres estados:
-Pending: Una promesa inicia en esté estado:
 -Fulfilled: Cuando se resuelve exitosamente. .then(va => …)
-Rejected: Si sucede algún error. .catch(err => …)
 */

//crear funcion algo va a pasar
const somethingWillHappen = () =>{
    return new Promise ((resolve, reject) =>{
        if(true){
            resolve('Hey')
        } else{
            reject('Ugh!!!')
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve('Heydfsf')
            }, 3000)

        }else{
            const error = new Error("Error")
            reject(error)

        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

    //correr varias promesas al mismo tiempo
Promise.all([somethingWillHappen(),somethingWillHappen2()]).
then(response =>{
    console.log('array' , response)
})
.catch(err => {
    console.error(err)
})