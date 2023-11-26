const {readConsole} = require('./reto4-promesas-readConsole');
const {writeAndRead} = require('./reto4-promesas-writeAndRead');
readConsole((user) => {
    writeAndRead('miFichero.json', user);
});