import React from 'react'
import {Card, CardHeader} from "reactstrap"
import { useSelector,useDispatch } from "react-redux"
import {fetchWeatherIfNeeded} from "../../../Redux/Actions/weather"

export default function WeatherCard() {
    const dispatch = useDispatch()
    dispatch(fetchWeatherIfNeeded("Jaipur,in"))

    var weather = useSelector(state=>state.weather.data)
    return (
        <Card className="shadow" style={{padding:"10%"}}>
            
        </Card>
    )
}
