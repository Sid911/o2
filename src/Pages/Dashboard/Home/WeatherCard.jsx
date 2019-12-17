import React from 'react'
import {Card, CardHeader} from "reactstrap"
import { useSelector,useDispatch } from "react-redux"
import {fetchWeatherIfNeeded} from "../../../Redux/Actions/weather"

export default function WeatherCard() {
    const dispatch = useDispatch()
    dispatch(fetchWeatherIfNeeded("Jaipur,in"))
    var weather = useSelector(state=>state.weather.data)
    console.log(weather)
    return (
        <Card className="bg-transparent border-blue" style={{padding:"10%"}}>
            <div className="display-4">Place Name 🏢: {weather.name} </div>
            <div className="display-4">Temp 🌡: {weather.main.temp - 273.15} </div>
            <div className="display-4">Feels Like ❄: {weather.main.feels_like  - 273.15} </div>
            <div className="display-4">Max Temp: {weather.main.temp_max  - 273.15} </div>
            <div className="display-4">Least Temp : {weather.main.temp_min  - 273.15} </div>
        </Card>
    )
}
