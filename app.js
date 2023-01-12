document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch( city ) {
let key = '77f97b598769bf8861004c74e30ebbba'

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(function (resp){
        return resp.json()
    })
    .then(function (data) {
        console.log(data)
        drawWeather(data)
    })
    .catch(function (error){
        console.log(error)
    })
}

function drawWeather(data){
    let celcius = Math.round(data.main.temp - 273.15)

    document.querySelector('#location').innerHTML = data.name
    document.querySelector('#temp').innerHTML = celcius + '&deg'
    document.querySelector('#description').innerHTML = data.weather[0].description
}
function cityWeather(){
    weatherDataFetch('Tallinn')
}