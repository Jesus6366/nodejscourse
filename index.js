// Commonjs every file is module (by default)
// Modules - encapsulated code (onlye share minumun)

const names = require("./4-firstModule");
const sayHi = require("./5-secondModule");

sayHi(names.john);
sayHi(names.peter);
sayHi("jesus");
