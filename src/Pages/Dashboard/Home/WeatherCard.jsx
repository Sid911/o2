import React from 'react'
import {Card, CardHeader} from "reactstrap"
import { useSelector,useDispatch } from "react-redux"
import {fetchWeatherIfNeeded} from "../../../Redux/Actions/weather"

export default function WeatherCard() {
    const dispatch = useDispatch()
    const querry = "Jaipur,in"
    const st = "http://api.openweathermap.org/data/2.5/weather?q="+querry+"&APPID=d0eb2760016b4cf1c3e55e818f9b17bb"
    const resp = fetch(st)
      .then(Response => Response.json())
      .then(json=>console.log(json)
      )
    return (
        <Card className="shadow" style={{padding:"10%"}}>
            <h3>Temp : "the temp"</h3> 
            <h2>Weather : "Cloudy etc."</h2>

        </Card>
    )
}
