//CommonJS, every file is module by default
// modules - Encapsulated code (only sare minimum)


const names = require('./3.1-name.js')

const say = require('./3.0-module')

say.sayHi('susan')
say.sayHi(names.john)
say.sayHello(names.peter)