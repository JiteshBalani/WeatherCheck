const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fea6b1a77cmsh5f62052a1c20f75p1cca28jsnfde7e71d5dd4',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const cloud_pct = document.querySelector(".cloud_pct")
const temp = document.querySelector(".temp")
const feels_like = document.querySelector(".feels_like")
const humidity = document.querySelector(".humidity")
const min_temp = document.querySelector(".min_temp")
const max_temp = document.querySelector(".max_temp")
const wind_speed = document.querySelector(".wind_speed")
const sunrise = document.querySelector(".sunrise")
const sunset = document.querySelector(".sunset")
const cityName = document.querySelector(".cityName")
// const city = document.querySelector(".city")

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;

        })
        .catch(err => console.error(err))
}

// function populateTable(cities) {
//     const tbody = document.querySelector("tbody");
//     const tr = tbody.querySelectorAll("tr");
//     for (let i = 0; i < tr.length; i++) {
//         fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities[i], options)
//             .then(response => response.json())
//             .then(response => {
//                 let currentRow = tr[i];
//                 const td = currentRow.querySelectorAll("td");
//                 for (let j = 0; j < td.length; j++) {
//                     let currentTd = td[j];
//                     let currentSpan = currentTd.firstChild;
//                     let className = currentSpan.classList[0];
//                     // console.log(response.className);
//                     // currentSpan.innerText = '25';
//                     currentSpan.innerText = response[className];
//                 }
//             })

//     }
// }
// populateTable(["Bengaluru", "Hyderabad", "Indore", "Kolkata"]);



getWeather(city);

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
})

getWeather("New Delhi");






