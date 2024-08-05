const weather_form = document.getElementById('weather_form');
weather_form.addEventListener('submit', (event) => {
    event.preventDefault();
    const search = document.getElementById('search').value;
    fetch(`http://api.weatherapi.com/v1/current.json?key=7013c0154c9a44a892430916230407&q=` +search)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            const temperatureC = data.current.temp_c;
            const temperatureF = data.current.temp_f;
            const windSpeed = data.current.wind_kph;
            let p = document.getElementById('p');
            p.innerHTML = `Температура: ${temperatureC} °C`;
            let img = document.getElementById('img');
            img.src = data.current.condition.icon;
            document.getElementById('image').appendChild(img);
            let p1 = document.getElementById('p1');
            p1.innerHTML = `Погодные условия: ${data.current.condition.text}`;
            let wind = document.getElementById('wind');
            wind.innerHTML = `Скорость ветра: ${windSpeed} км/ч`;
            let btn = document.getElementById('btn');
            btn.addEventListener('click', () => {
                if (p.innerHTML.includes('°C')) {
                    p.innerHTML = `Температура: ${temperatureF} °F`;
                } else {
                    p.innerHTML = `Температура: ${temperatureC} °C`;
                }
            });
        });
});