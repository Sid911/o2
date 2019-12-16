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
<<<<<<< HEAD
        <Card className="bg-transparent border-blue" style={{padding:"10%"}}>
=======
        <div>
        <Card className="shadow" style={{padding:"10%"}}>
>>>>>>> 5a995c678386d3ff9ee0d16ae00dc9d21d956d13
            {weather.name}
            {weather.main.temp}
            {weather.main.feels_like}
            {weather.main.temp_max}
            {weather.main.temp_min}
        </Card>
        </div>
    )
}
