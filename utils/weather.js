 const weather = (location, unit , callback) => {

        const api_key = '36d75c56737d6968591ae6964705c195'
        const url = `http://api.weatherstack.com/current?access_key=36d75c56737d6968591ae6964705c195&query=${encodeURIComponent(location)}&units=${unit}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.success === false) {
                callback(`Impossible de renvoyer vos informations. Error ${data.error.code}: ${data.error.info}`, undefined)
            }else {
                const {current, location} = data;
                callback(undefined, {
                    location: location.name,
                    country: location.country,
                    temperature: current.temperature,
                    feelslike: current.feelslike,
                    descriptions: current.weather_descriptions[0]
                });
            }
        });
    }


    module.exports = {weather};