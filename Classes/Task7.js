const task = () => setTimeout(() => console.log('Test'), 7000)

const antiOptimizeAsync = (task) => new Promise((resolve) => setTimeout(() => resolve(task()), 1500))

// https://www.codewars.com/kata/58d014421c694f71630000bc
