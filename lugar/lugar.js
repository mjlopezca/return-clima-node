const axios = require('axios')


const getLugarLatitudLongitud = async(dir) => {
    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            "X-RapidAPI-Key": "3df2553e20mshded954e97b69790p17a0d2jsna6ae248c705f"
        }
    });
    const encoderUrl = encodeURI(dir);
    const respuesta = await instance.get(`?location=${encoderUrl}`);
    if (respuesta.data.Results.leght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatitudLongitud
}