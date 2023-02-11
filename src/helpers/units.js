export const getCelsius = (value) => {
    return value - 273;
}

export const getFaren = (value) => {
    return (value - 273.15) * 9 / 5 + 32;
}