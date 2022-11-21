//Capturar los elementos del DOM, para modificar posteriormente

let container = document.getElementById("container");
let searchForm = document.getElementById("search_submit");
let searchInput = document.getElementById("search_input");
let temperatureDegrees = document.getElementById("degreeNumber");
let weatherIcon = document.getElementById("logo-weather");
let temperatureDescription = document.getElementById("description");
let timeZone = document.getElementById("timezone");
let date = document.getElementById("date");
let min = document.getElementById("min");
let max = document.getElementById("max");
let latitude;
let longitude;
let btn = document.getElementById("btn-search");
let numberWind = document.getElementById("numberwind");
let numberHumid = document.getElementById("numberhumid");
let numberMiles = document.getElementById("numbermiles");
let numberNub = document.getElementById("numbernub");
let tempMaxc1 = document.getElementById("degreeNumber_c1_max");
let tempMinc1 = document.getElementById("degreeNumber_c1_min");
let tempMaxc2 = document.getElementById("degreeNumber_c2_max");
let tempMinc2 = document.getElementById("degreeNumber_c2_min");
let tempMaxc3 = document.getElementById("degreeNumber_c3_max");
let tempMinc3 = document.getElementById("degreeNumber_c3_min");
let tempMaxc4 = document.getElementById("degreeNumber_c4_max");
let tempMinc4 = document.getElementById("degreeNumber_c4_min");
let tempMaxc5 = document.getElementById("degreeNumber_c5_max");
let tempMinc5 = document.getElementById("degreeNumber_c5_min");
let weatherIconc1 = document.getElementById("logo-weather_c1");
let weatherIconc2 = document.getElementById("logo-weather_c2");
let weatherIconc3 = document.getElementById("logo-weather_c3");
let weatherIconc4= document.getElementById("logo-weather_c4");
let weatherIconc5 = document.getElementById("logo-weather_c5");
let diaPronostico1 = document.getElementById("dia-pronostico1");
let diaPronostico2 = document.getElementById("dia-pronostico2");
let diaPronostico3 = document.getElementById("dia-pronostico3");
let diaPronostico4 = document.getElementById("dia-pronostico4");

//Declarar funciones secundarias

const displayCurrentData = (obj, city)=>{
    //Actualizar temperatura
    temperatureDegrees.textContent = Math.floor(obj.temp_c);
    //Actualizar ciudad y convertir primer caracter en mayuscula
    timeZone.textContent = city.charAt(0).toUpperCase() + city.slice(1);
    //Cambiar el logo del clima
    const icon = obj.wx_icon;
    weatherIcon.innerHTML = `<img src='../Icons/${icon}' id="logo-clima">`;
    //Descripcion del clima
    temperatureDescription.textContent = obj.wx_desc;
    //Velocidad del viento
    numberWind.textContent = obj.windspd_mph;
    //Porcentaje de humedad
    numberHumid.textContent = obj.humid_pct;
    //numero de visibilidad
    numberMiles.textContent = obj.vis_mi;
    //Porcentaje de nubosidad
    numberNub.textContent = obj.cloudtotal_pct;
}

const displayForecastData = (obj)=>{
    //Actualizar temperatura
    actualizarTemp(obj);
    //Cambiar el logo del clima
    mostrarIcono(obj);
    //Descripcion del día
    mostrarDias(obj);
}

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    getWeatherData(searchInput.value)
})

function actualizarTemp(obj){
    tempMaxc1.textContent = obj.Days[1].temp_max_c;
    tempMinc1.textContent = obj.Days[1].temp_min_c;
    tempMaxc2.textContent = obj.Days[2].temp_max_c;
    tempMinc2.textContent = obj.Days[2].temp_min_c;
    tempMaxc3.textContent = obj.Days[3].temp_max_c;
    tempMinc3.textContent = obj.Days[3].temp_min_c;
    tempMaxc4.textContent = obj.Days[4].temp_max_c;
    tempMinc4.textContent = obj.Days[4].temp_min_c;
    tempMaxc5.textContent = obj.Days[5].temp_max_c;
    tempMinc5.textContent = obj.Days[5].temp_min_c;
}

function mostrarIcono(obj){
    let icon = obj.Days[1].Timeframes[0].wx_icon;
    weatherIconc1.innerHTML = `<img src='../Icons/${icon}' id="logo-clima-c">`;
    icon = obj.Days[2].Timeframes[0].wx_icon;
    weatherIconc2.innerHTML = `<img src='../Icons/${icon}' id="logo-clima-c">`;
    icon = obj.Days[3].Timeframes[0].wx_icon;
    weatherIconc3.innerHTML = `<img src='../Icons/${icon}' id="logo-clima-c">`;
    icon = obj.Days[4].Timeframes[0].wx_icon;
    weatherIconc4.innerHTML = `<img src='../Icons/${icon}' id="logo-clima-c">`;
    icon = obj.Days[5].Timeframes[0].wx_icon;
    weatherIconc5.innerHTML = `<img src='../Icons/${icon}' id="logo-clima-c">`;
}

function mostrarDias(obj){
    let fecha = convertDateFormat(obj.Days[2].date);
    let fechaFormato = new Date(fecha).toLocaleDateString('es-ES', { weekday:"long"});
    diaPronostico1.textContent = fechaFormato.charAt(0).toUpperCase() + fechaFormato.slice(1);
    fecha = convertDateFormat(obj.Days[3].date);
    fechaFormato = new Date(fecha).toLocaleDateString('es-ES', { weekday:"long"});
    diaPronostico2.textContent = fechaFormato.charAt(0).toUpperCase() + fechaFormato.slice(1);
    fecha = convertDateFormat(obj.Days[4].date);
    fechaFormato = new Date(fecha).toLocaleDateString('es-ES', { weekday:"long"});
    diaPronostico3.textContent = fechaFormato.charAt(0).toUpperCase() + fechaFormato.slice(1);
    fecha = convertDateFormat(obj.Days[5].date);
    fechaFormato = new Date(fecha).toLocaleDateString('es-ES', { weekday:"long"});
    diaPronostico4.textContent = fechaFormato.charAt(0).toUpperCase() + fechaFormato.slice(1);

    //Dia de hoy
    fecha = convertDateFormat(obj.Days[0].date);
    fechaFormato = new Date(fecha).toLocaleDateString('es-Es', {weekday: 'long',year: 'numeric', month: 'long', day: 'numeric' });
    date.textContent = fechaFormato;
}

function convertDateFormat(string) {
    var info = string.split('/');
    return info[2] + '/' + info[1] + '/' + info[0];
}