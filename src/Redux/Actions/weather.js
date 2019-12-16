export const ADD_WEATHER = 'ADD_WEATHER'
export const FETCH_WEATHER = 'FETCH_WEATHER'
export const REQUEST_WEATHER = "REQUEST_WEATHER"



export function requestWeather() {
  return {
    type: REQUEST_WEATHER
  }
}

export function addWeather(json) {
  console.log(json);
  return {
    type: ADD_WEATHER,
    weather: json,
    receivedAt: Date.now(),
  }
}

function fetchWeather(querry) {
  const st = "http://api.openweathermap.org/data/2.5/weather?q="+querry+"&APPID=d0eb2760016b4cf1c3e55e818f9b17bb"
  return dispatch => {
    dispatch(requestWeather())
    fetch(st)
      .then(Response => Response.json())
      .then(json => dispatch(addWeather(json)))
  }
}

function shouldFetchWeather(state) {
  var current = state.weather.isFetched
  var dir = state.weather 
  if (!current) {
    return true
  } else if (Math.floor((Date.now() - dir.lastUpdated) / (60000 * 15)) >= 1) {
    return true
  } else {
    return false
  }
}

export function fetchWeatherIfNeeded( querry) {
  return (dispatch, getState) => {
    if (shouldFetchWeather(getState())) {
      console.log("did weather Something")
      return dispatch(fetchWeather(querry))
    } else {
      // Let the calling code know there's nothing to wait for.
      console.log("Wait for 15 min to get new weather")
      return Promise.resolve()
    }
  }
}