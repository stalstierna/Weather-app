const cityName = document.querySelector(".input");
const inputButton = document.querySelector(".input_button");

const emoji = document.querySelector(".emoji");
const temp = document.querySelector(".temp");
const cityText = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind_speed");

const tempDiv = document.querySelector(".temp_div");
const tempDetails = document.querySelector(".temp_details");

const errorMessage = document.querySelector(".error");

const apiKey = "f153a8a70ccad096c047e8114133a31a";


async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    if(response.status == 404){
        errorMessage.style.display = "block";
        tempDiv.style.display = "none";
        tempDetails.style.display = "none";
    }
    else{

        const data = await response.json()

        console.log(data)
    
        temp.textContent = Math.round(data.main.temp) + "ºC";
        cityText.textContent = data.name;
        humidity.textContent = data.main.humidity;
        windSpeed.textContent = Math.round(data.wind.speed) + " (" + Math.round(data.wind.gust) + ")";
    
        if (data.weather[0].main == "Clouds"){
            emoji.textContent = "☁️";
        }
        else if (data.weather[0].main == "Clear"){
            emoji.textContent = "🌞";
        }
        else if (data.weather[0].main == "Rain"){
            emoji.textContent = "🌧️";
        }
        else if (data.weather[0].main == "Drizzle"){
            emoji.textContent = "🌦️";
        }
        else if (data.weather[0].main == "Mist"){
            emoji.textContent = "🌫️";
        }
    
        tempDiv.style.display = "flex";
        tempDetails.style.display = "flex";
        errorMessage.style.display = "none";

    }
}

inputButton.addEventListener("click", function(){
    checkWeather(cityName.value)
});



