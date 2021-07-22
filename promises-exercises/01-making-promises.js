// ex1
const makePromiseResolveWith3 = () => Promise.resolve(3)

// ex2 
const makePromiseRejectWithBoo = () => Promise.reject('Boo!')

//ex3
const makePromiseWithConstructor = (itShouldResolve) => {
  return new Promise((resolve, reject) => {
    itShouldResolve ? resolve() : reject()
  });
}

//ex4
const makeDelayPromise = (value, delayInMs) => {
  return new Promise((resolve) => setTimeout(() =>{
    resolve(value)
  }, delayInMs))
}
