const AsyncFizzBuzz = (number) => {
  return new Promise((resolve, reject) => {
    switch(true) {
      case number % 5 === 0 && number % 3 === 0 :
        return resolve('FizzBuzz')
      case number % 5 === 0: 
        return resolve('Buzz')
      case number % 3 === 0:
        return resolve('Fizz')
      default:
        return reject(number)
    }
  })
}

AsyncFizzBuzz(15).then(console.log).catch(console.log)