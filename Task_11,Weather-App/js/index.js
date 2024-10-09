// search input & submit btn
let searchInput = document.getElementById("searchInput");
let submitBtn = document.getElementById("submitBtn");

// Today
let todayDayName = document.getElementById("todayDayName");
let todayMonthName = document.getElementById("todayMonthName");
let todayLocation = document.getElementById("todayLocation");
let todayTemp = document.getElementById("todayTemp");
let todayConditionImage = document.getElementById("todayConditionImage");
let todayConditionText = document.getElementById("todayConditionText");
let clouds = document.getElementById("clouds");
let windSpeed = document.getElementById("windSpeed");
let windDirection = document.getElementById("windDirection");

// Next Days
let nextDayName = document.querySelectorAll(".nextDayName");
let nextDayImage = document.querySelectorAll(".nextDayImage");
let nextDayMaxTemp = document.querySelectorAll(".nextDayMaxTemp");
let nextDayMinTemp = document.querySelectorAll(".nextDayMinTemp");
let nextDayConditionText = document.querySelectorAll(".nextDayConditionText");

// fetch api data
async function getWeatherData(cityName) {
    let weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8652347b5d9d4efaae105633240910&q=${cityName}&days=3`);
    let weatherData = await weatherResponse.json();
    return weatherData;
}

// fetch api ip address
async function getIpAddress() {
    let ipResponse = await fetch("https://api.ipify.org?format=json");
    let ipData = await ipResponse.json();
    return ipData;
}

// fetch api ip address detals
async function getCityName() {
    let ip = await getIpAddress()
    let ipResponse = await fetch(`https://ipapi.co/${ip.ip}/json/`);
    let ipData = await ipResponse.json();
    return ipData;
}

// display today data
function displayTodayData(data) {
    let date = new Date(data.location.localtime);
    todayDayName.innerHTML = date.toLocaleDateString("en-US" , {weekday:"long"});
    todayMonthName.innerHTML = `${date.getDate()} ${date.toLocaleDateString("en-US" , {month:"long"})}`;
    todayLocation.innerHTML = data.location.name;
    todayTemp.innerHTML = data.current.temp_c;
    todayConditionImage.setAttribute("src" , data.current.condition.icon);
    todayConditionText.innerHTML = data.current.condition.text;
    clouds.innerHTML = `${data.current.cloud}%`;
    windSpeed.innerHTML = `${data.current.wind_kph}km/h`;
    windDirection.innerHTML = data.current.wind_dir;
}

// display next days data
function displayNextDaysData(data) {
    for(let i=0 ; i<2 ; i++) {
        let date = new Date(data.forecast.forecastday[i+1].date);
        nextDayName[i].innerHTML = date.toLocaleDateString("en-US" , {weekday:"long"});
        nextDayImage[i].setAttribute("src" , data.forecast.forecastday[i+1].day.condition.icon);
        nextDayMaxTemp[i].innerHTML = data.forecast.forecastday[i+1].day.maxtemp_c;
        nextDayMinTemp[i].innerHTML = data.forecast.forecastday[i+1].day.mintemp_c;
        nextDayConditionText[i].innerHTML = data.forecast.forecastday[i+1].day.condition.text;
    }
}

// startup app
async function startApp(cityName) {
    let weatherData = await getWeatherData(cityName);
    if(!weatherData.error) {
        displayTodayData(weatherData);
        displayNextDaysData(weatherData);
    }
}

async function findCity() {
     let location = await getCityName();
    startApp(location.city);
}

findCity();

searchInput.addEventListener("input" , function() {
    startApp(searchInput.value);
})

submitBtn.addEventListener("click" , function(){
    startApp(searchInput.value);
})