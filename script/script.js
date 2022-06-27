const url = config.MyURL; // get openweather 
const key = config.MyKEY ;// get API key

const setQueryKey = (e) => { // setQueryKey function press enter after delete searchBar value and get API results
    if (e.keyCode == '13'){
        getResult(searchBar.value)
        searchBar.value = ""
    }
    //getResult(searchBar.value)
}
const getResult = (cityName) => { // get result city name create query
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`

    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult);

}
const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;
    
    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)} °C`;
    
    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description

    let minMax = document.querySelector('.minmax');
    minMax.innerText = `${Math.round(result.main.temp_min)}°C Min / ${Math.round(result.main.temp_max)}°C Max`;
}



const searchBar = document.getElementById('search-bar');  // searchBar Select and assing in searchBar variable
searchBar.addEventListener('keypress', setQueryKey);    // keypress eventListenerfunction
