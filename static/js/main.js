
let apiKey = 'f3158a85d7f30b7016315e735609df8d'

let genWeather = $( '#genWeather' );

genWeather.on('submit', function( e ){
    e.preventDefault();

    let city = $( '#city' )
    let state = $('#state')
    let resultLocation = $('#resultLocation')
    let high = $('#high')
    let low = $('#low')
    let forecast = $('#forecast')
    let humidity = $('#humidity')

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.val()},${state.val()}&appid=f3158a85d7f30b7016315e735609df8d`)
        .then(function(res){
            let data = res.data

            // console.log(data.weather[0].main);
            resultLocation.text(`${city.val()}, ${state.val()}`);
            high.text(toF(data.main.temp_max) + '\xB0' + 'F');
            low.text(toF(data.main.temp_min) + '\xB0' + 'F');
            forecast.text(data.weather[0].main);
            humidity.text(data.main.humidity + '%');

        })
        .catch( e => {
            console.log(e);
        });

});


function toF(temp){
    return Math.floor((temp-273.15) * 9/5 +32)
}