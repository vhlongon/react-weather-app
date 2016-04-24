import axios from "axios";

//Example call for the weather app:
// http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=4ed7ee6678b89f4d70ae77e7c4a2f0be
const API_KEY = '4ed7ee6678b89f4d70ae77e7c4a2f0be';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const COUNTRY_CODE = 'us';

// instead of passing the string directly into the action creator we store it on a variable
// that we both export (to the reducer) and pass to the action creator,
// in this way we garantee consistency and avoid bugs because of typos and such
export const FETCH_WEATER = 'FETCH_WEATER';

export function fetchWeather(city) {
  let url =  `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
  let request = axios.get(url);
  return {
    type: FETCH_WEATER,
    payload: request
  };
}
