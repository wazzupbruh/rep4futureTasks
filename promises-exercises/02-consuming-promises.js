//ex1
let promise = new Promise(resolve => setTimeout(() => resolve('promise'), 100))
let action = (str) => console.log(str + ' has been performed')
const waitForPromise = async (promise, action) => {
  let a = await promise;
  await action(a)
}
console.log(waitForPromise(promise, action))

//ex2
let promise = new Promise((resolve) => resolve('resolve')), consumer = (str) => console.log(str + ' consumer'), handler = 'an error'
const consumePromise = async (promise, consumer, handler) => {
  try{
    let a = await promise
    consumer(a)
  }catch(handler){
    console.log(handler)
  }
}
console.log(consumePromise(promise, consumer, handler))

