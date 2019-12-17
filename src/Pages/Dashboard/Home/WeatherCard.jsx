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
            <div className="display-4">Place Name : {weather.name} </div>
            <div className="display-4">Place Name : {weather.main.temp} </div>
            <div className="display-4">Place Name : {weather.main.feels_like} </div>
            <div className="display-4">Place Name : {weather.main.temp_max} </div>
            <div className="display-4">Place Name : {weather.main.temp_min} </div>
        </Card>
    )
}
