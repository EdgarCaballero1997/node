const {readConsole} = require('./readConsole');
const {writeAndRead} = require('./writeAndReadObject');
readConsole((user) => {
    writeAndRead('miFichero.json', user);
});