// init storage
const storage = new Storage();

// get storage loction data
const weatherlocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherlocation.city, weatherlocation.country);
// init UI
const ui = new UI();

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click',
  (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);
    // get and display weater 
    getWeather();
    // set location in localStorage
    storage.setLocationData(city, country);
    // close modal jqeery
    $('#locModal').modal('hide');

  });

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err))
}







