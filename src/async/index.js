/**
 * Async/await no es mas que Syntax Sugar.
 *  Es una manera mas bonita de hacer lo mismo que estabamos haciendo con
 *  .then(). La clave es recordar que si una función regresa un promesa,
 *  podemos usar el keyword await,
 *  que le indicia al navagador: 
 * “Espera a que la promesa se resuleva y 
 * almacena su resultado en esta variable”. 
 * Todo esto toma lugar dentro de una función asincrona, 
 * asi que usamos async para lograr esto
 * 
 * 
 * 
 * 
 */


//una nueva promesa
const doSomething = () =>{
    return new Promise((resolve,reject) => {
        (true)
        //if ternario 
        ? setTimeout(() => resolve('Do something Async'),3000)
        : reject(new Error('Do something As'))
    })
}

const doSomethingAsynx = async () => {
    const something = await doSomething()
    console.log(something)
    
}

console.log('before')
doSomethingAsynx()
console.log('after') 

const anotherFunction = async () => {
    try {
        const something = await doSomething()
        console.log(something)
    } catch {
        console.log(err)
    }
}

console.log('before1')
anotherFunction()
console.log('after1') 