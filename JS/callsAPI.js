//Declarar getWeatherData
//para los dias proximos `http://api.weatherunlocked.com/api/forecast/${data.data[0].latitude},${data.data[0].longitude}?app_id=09a1f657&app_key=1c643a7f14caa57bdf14e0f81bc7e445`


/*const getWeatherData = async (city)=>{
    fetch(`http://api.positionstack.com/v1/forward?access_key=31c9654c0d654ee8372a85a8749b5073&query=${city}`)
    .then(response => {return response.json()})
    .then(data => {
        fetchAWeather(data, city);
        fetchAForecastWeather(data, city);
    })
    .catch(error =>{
        console.log(error);
        alert("Inserte una localidad válida!");
    });


} */

const getWeatherData = async (city)=>{
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=56cf18067fb74c71b0309cb9404adb61`)
    .then(response => {return response.json()})
    .then(data => {
        console.log(data)
        fetchAWeather(data, city);
        fetchAForecastWeather(data, city);
    })
    .catch(error =>{
        console.log(error);
        alert("Inserte una localidad válida!");
    });


} 

const fetchAWeather = (res, city) => {
    fetch(`http://api.weatherunlocked.com/api/current/${res.results[0].geometry.lat},${res.results[0].geometry.lng}?app_id=09a1f657&app_key=1c643a7f14caa57bdf14e0f81bc7e445`)
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
    fetch(`http://api.weatherunlocked.com/api/forecast/${res.results[0].geometry.lat},${res.results[0].geometry.lng}?app_id=09a1f657&app_key=1c643a7f14caa57bdf14e0f81bc7e445`)
    .then(response => {return response.json()})
    .then(data => {
    console.log(data)
    displayForecastData(data, city)
    })
    .catch(error =>{
        console.log(error);
    })
}