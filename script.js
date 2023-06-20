let city;
let userCityInput = document.querySelector("#inp");
let searchBtn = document.querySelector(".btn");
const container = document.querySelector(".container");

//This is a new api and may produce in accurate information, so using simple way around using city names.
const fetchCityLocation = async (city) => {
    try{
        // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=e5738002c5bea4b0bc71830ac421fe8a`);
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},IN&appid=e5738002c5bea4b0bc71830ac421fe8a`);
        const data = await response.json();
        const { lat, lon } = data[0]; //same as: latitude = data[0].lat; longitude = data[0].lon;
        return {latitude: lat, longitude: lon};
    }
    catch (error){
        console.log("Error: " , error);
    }
};

const fetchCurrentWeather = async (latitude , longitude) => {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e5738002c5bea4b0bc71830ac421fe8a`);
        const data = await res.json();
        let desc = data.weather[0].description;
        let icon = data.weather[0].icon;
        let avgTemp = ((data.main.temp) - 273.15).toPrecision(4);
        let feelsLike = ((data.main.feels_like) - 273.15).toPrecision(4);
        let humidity = (data.main.humidity).toPrecision(4);
        let windSpeed = (data.wind.speed).toPrecision(4);
        container.innerHTML = `<h1>${city}</h1>
        <h2>Avg. Temperature: ${avgTemp}°C</h2>
        <img src="https://openweathermap.org/img/wn/${icon}.png" class="myIcon"/>
        <h2>Feels Like: ${feelsLike}°C</h2>
        <h2>${desc}</h2>
        <h2>Wind Speed: ${windSpeed} m/s</h2>
        <h2>Humidity: ${humidity}%</h2>`;
    }
    catch(error){ 
        console.log("Error: " , error);
    }
};

const searchCity = async () => {
    city = await userCityInput.value;
    let {latitude, longitude} = await fetchCityLocation(city);
    fetchCurrentWeather(latitude,longitude);
};


searchBtn.addEventListener("click" , async () => {
    searchCity();
});

userCityInput.addEventListener("keydown" , async (e) => {
    if (e.key == "Enter") {  //checks whether the pressed key is "Enter"
        searchCity();
    }
});

if(city === undefined){
    city="vadodara";
    fetchCurrentWeather(22.2973142,73.1942567);
}