import React from 'react'
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from './WeatherTemperature';


const WeatherInfo = (props) => {
  return (
    <div className="WeatherInfo my-5">
    <div className="flex justify-between">
      <div className="w-[400px] mx-6 ">
        <h1 className="text-[38px] font-[700] leading-[48px] capitalize ">{props.data.City}</h1>
        <ul>
          <li>
           <FormatDate  date={props.data.Date}/> 

          </li>
          <li className="capitalize  ">{props.data.Description}</li>
          <li>
          Humidity: <strong>{props.data.Humidity}%</strong>, Wind:
            <strong>{props.data.Wind}km/h</strong>
          </li>
        </ul>
      </div>
      <div className="w-[400px] flex flex-start ">
        <WeatherIcon icon={props.data.Icon} size={'64px'} />
        <WeatherTemperature temp={props.data.Temperature} />
      </div>
    </div>
  </div>
  )
}

export default WeatherInfo