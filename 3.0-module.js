const sayHi = (name) => {
    console.log(`Hi there ${name}`)
}

const sayHello = (name) => {
    console.log(`Hello there ${name}`)
}

module.exports = { sayHi, sayHello }

//----type of export

// module.exports = sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }