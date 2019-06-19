const axios = require('axios')
const getClima = async(lat, lon) => {
    const resp = await axios.get('https://api.openweathermap.org/data/2.5/find?', {
        params: {
            lat,
            lon,
            appid: 'd4c1234a57868630dedc9aa2e61382dc',
            units: 'metric'
        }
    })
    console.log(resp.data.list[0].main.temp);
    return resp.data.list[0].main.temp;
}


module.exports = {
    getClima
}