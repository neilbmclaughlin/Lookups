function getCapitalMessage (country) {
  return `The capital of ${country} is ${capitals[country]}`
}

const capitals = require('./capitals.json')
console.log(capitals)
console.log(getCapitalMessage('England'))
console.log(getCapitalMessage('France'))
console.log(capitals.England)
