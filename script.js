// Mock weather data
const weatherData = {
    Sydney: 28,
    London: 15,
    Tokyo: 22,
    Bangalore: 25,
    Paris: 18
};

// Simulated API
function fetchWeather(city) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (!city) {
                reject("City name is missing");
            } else {

                let cityName = Object.keys(weatherData).find(
                    name => name.toLowerCase() === city.toLowerCase()
                );

                if (cityName === undefined) {
                    reject("City not found");
                } else {
                    resolve({
                        city: cityName,
                        temperature: weatherData[cityName]
                    });
                }
            }

        }, 1000);
    });
}

// Async function
async function getWeather(city) {

    try {

        let temperature = await fetchWeather(city);

        let message = `Temperature in ${temperature.city} is ${temperature.temperature}°C`;

        console.log(message);

        document.getElementById("result").innerHTML = message;

    }
    catch (error) {

        let message = `Failed to fetch weather: ${error}`;

        console.log(message);

        document.getElementById("result").innerHTML = message;

    }
    finally {

        console.log("Weather check completed");

    }
}

// Function called by HTML button
function checkWeather() {

    let city = document.getElementById("city").value;

    getWeather(city);
}
