//ex1
let promise = new Promise(resolve => setTimeout(() => resolve('promise'), 100))

let action = (str) => console.log(str + ' has been performed')

const waitForPromise = async (promise, action) => {
  let a = await promise;
  await action(a)
}

console.log(waitForPromise(promise, action))

//ex2

