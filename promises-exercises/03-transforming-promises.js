//ex1
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise.then(el => resolve(transformer(el))).catch(err => reject(err))
  })
}

//ex2
function squarePromise(numberPromise){
  return numberPromise
   .then(result => isNaN(result) ? Promise.reject(`Cannot convert '${result}' to a number!`) : Promise.resolve(Number(result) * Number(result)))
}

//ex3
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(promise => Promise.reject())
    .catch(result => {if(isNaN(result)) return Promise.resolve(0)});
}

//ex4
function switcheroo(promise){
  return promise.then(result => Promise.reject(result), result => Promise.resolve(result));
}
