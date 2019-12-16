import {
    ADD_NEWS,
    REQUEST_NEWS
} from "../Actions/news";

const initWeather = {
    isFetching = false,
    coord: {
        lon: null,
        lat: null
    },
    weather: [{
        id: null,
        main: null,
        description: null,
        icon: null,
    }],
    base: stations,
    main: {
        temp: null,
        feels_like: null,
        temp_min: null,
        temp_max: null,
        pressure: null,
        humidity: null
    },
    visibility: null,
    wind: {
        speed: null,
        deg: null
    },
    clouds: {
        all: null
    },
    dt: null,
    sys: {
        type: null,
        id: null,
        country: null,
        sunrise: null,
        sunset: null
    },
    timezone: null,
    id: null,
    name: null,
    cod: null
}
}