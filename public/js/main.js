/* `Le nom de la ville est ${location.name}. Le pays est la ${location.country}.
 il fait ${current.temperature}°, le ressenti est de ${current.feelslike}° parce que le temps est ${current.weather_descriptions[0]}.` */


 const myForm = document.querySelector('.myForm');
 const myLocationm = document.querySelector('.myLocation');
 const weatherData = document.getElementById('weatherData')

 console.log(myForm);


myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/weather?location=${myLocationm.value}`)
    .then(res => res.json())
    .then(data => {
        const {location, feelslike, country, temperature, descriptions} = data;
      weatherData.innerHTML = `Le nom de la ville est ${location}. Le pays est la ${country}.
      il fait ${temperature}°, le ressenti est de ${feelslike}° parce que le temps est ${descriptions}.`
    });
});