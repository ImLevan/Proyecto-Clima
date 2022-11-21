//Declarar getWeatherData
//para los dias proximos `http://api.weatherunlocked.com/api/forecast/${data.data[0].latitude},${data.data[0].longitude}?app_id=09a1f657&app_key=1c643a7f14caa57bdf14e0f81bc7e445`


const getWeatherData = async (city)=>{
    fetch(`http://api.positionstack.com/v1/forward?access_key=d3b77e9b58538640d9412932b9ab24f7&query=${city}`)
    .then(response => {return response.json()})
    .then(data => {
        fetchAWeather(data, city);
        fetchAForecastWeather(data, city);
    })
    .catch(error =>{
        console.log(error);
        alert("Inserte una localidad válida!");
    });


} 

const fetchAWeather = (res, city) => {
    fetch(`http://api.weatherunlocked.com/api/current/${res.data[0].latitude},${res.data[0].longitude}?app_id=09a1f657&app_key=1c643a7f14caa57bdf14e0f81bc7e445`)
    .then(response => {return response.json()})
    .then(data => {
    console.log(data)
    displayCurrentData(data, city)
    })
    .catch(error =>{
        console.log(error);
    })
}

const fetchAForecastWeather = (res, city) => {
    fetch(`http://api.weatherunlocked.com/api/forecast/${res.data[0].latitude},${res.data[0].longitude}?app_id=09a1f657&app_key=1c643a7f14caa57bdf14e0f81bc7e445`)
    .then(response => {return response.json()})
    .then(data => {
    console.log(data)
    displayForecastData(data, city)
    })
    .catch(error =>{
        console.log(error);
    })
}