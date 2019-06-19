const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const getInfoClima = async(direccion) => {
    try {
        let ciudad = await lugar.getLugarLatitudLongitud(direccion);
        let temp = await clima.getClima(ciudad.lat, ciudad.lng);
        return `El clima de ${ciudad.direccion} es de ${temp}`;
    } catch (e) {
        throw new Error("No se encuentro informacion de la ciudad", e)
    }
}

getInfoClima(argv.direccion).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});