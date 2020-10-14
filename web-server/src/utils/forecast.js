const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=79d85219f0eae0d73a5c9484d1581556'

    request({ url, json: true }, (error, {body} ) => {
        
        if (error) {
            callback('Unable connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.name + ' It is currently ' + body.weather[0].description + ' degress out. There is a ' + body.wind.deg + '% chance of rain.')
        }
    })
}

module.exports = forecast