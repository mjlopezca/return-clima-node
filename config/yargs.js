const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'ciudad',
        demand: true
    }
}).argv

module.exports = {
    argv
}