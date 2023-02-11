export const getURL = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
}

export const getImage = (reference) => {
    return `http://openweathermap.org/img/wn/${reference}.png`
}