cities = [
    {
        'city': 'sigtuna',
        'year': '900'
    },
    {
        'city': 'skara',
        'year': '1000'
    },
    {
        'city': 'kalmar',
        'year': '1397'
    },
    {
        'city': 'orebro',
        'year': '1606'
    },
    {
        'city': 'karlsborg',
        'year': 'r1800'
    },
    {
        'city': 'malmo',
        'year': '1806'
    }
];

for(let i = 0; i < cities.length; i++) {
    function fetchWeather() {
        fetch(`https://secret-mountain-13843.herokuapp.com/${cities[i].city}`)
            .then(response => response.json())
            .then(function(data) {
                let icon = data.weather[0].icon;
                let kelvin = data.main.temp;
                let celcius = `${Math.floor(kelvin - 273)}°C`;
                
                document.getElementById(`${cities[i].year}_img`).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                document.getElementById(cities[i].year).innerHTML = celcius;
            })
    };
    window.addEventListener('DOMContentLoaded', fetchWeather);
};