let city;
let input = document.querySelector("#inp");
const container = document.querySelector(".container");

const currentWeather = async (city) => {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5738002c5bea4b0bc71830ac421fe8a`);

        const data = await res.json();
        
        console.log(data);

        let desc = data.weather[0].description;
        let icon = data.weather[0].icon;
        let avgTemp = (data.main.temp) - 273.15;
        let feelsLike = (data.main.feels_like) - 273.15;
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;
        console.log(desc);
        console.log(avgTemp);
        console.log(feelsLike);
        console.log(windSpeed);
        console.log(humidity);
        container.innerHTML = `<h1>${city}</h1>`;
        container.innerHTML += `<h2>Avg. Temperature: ${avgTemp.toPrecision(4)}°C</h2>`;
        container.innerHTML += `<img src="https://openweathermap.org/img/wn/${icon}.png" class="myIcon"/>`;
        container.innerHTML += `<h2>Feels Like: ${feelsLike.toPrecision(4)}°C</h2>`;
        container.innerHTML += `<h2>${desc}</h2>`;
        container.innerHTML += `<h2>Wind Speed: ${windSpeed.toPrecision(4)} m/s</h2>`;
        container.innerHTML += `<h2>Humidity: : ${humidity.toPrecision(4)}%</h2>`;
    }
    catch(err){
        console.log("Error: " , err);
    }
};

let searchBtn = document.querySelector(".btn");
searchBtn.addEventListener("click" , async () => {
    city = await input.value;
    console.log(city);
    container.innerHTML = `<h1>${city}</h1>`;
    currentWeather(city);
});

input.addEventListener("keydown" , async (e) => {
    if (e.code == "Enter") {  //checks whether the pressed key is "Enter"
        city = await input.value;
        console.log(city);
        currentWeather(city);
    }
});

currentWeather("vadodara");