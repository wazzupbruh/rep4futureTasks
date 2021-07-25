//ex1
const waitForPromise = async (promise, action) => {
   let a = await promise;
   await action(a)
}

//ex2
const consumePromise = (promise, consumer, handler) => {
  promise.then(result => consumer(result)).catch(err => handler(err))
})

