const API_KEY = "4befe6d2587fbbcdf8bedcf99515b0d7";

export const baseFetch = async (city: string) =>
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(async (response) => response.json());
