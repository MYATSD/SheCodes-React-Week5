import React from "react";
import axios from 'axios';
import { useState } from 'react';
import WeatherInfo from "./WeatherInfo";


const Weather = (props) => {
  const [weatherData,setWeatherData] = useState({
   
    ready : false


  })
  const [city,setCity] = useState( props.defaultCity)
  const todayWeather =(response)=>{
   
    setWeatherData({
      City: response.data.name,
      Humidity : response.data.main.humidity,
      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Wind: response.data.wind.speed,
      Icon: response.data.weather[0].icon,
      Date: response.data.dt ,
      ready : true






    })
   console.log(response)
   console.log( new Date(response.data.dt * 1000),
   )

  }
 const search=() =>{
  const Appid = 'f6c2990f3929b0780a59af13d1fba8f9'
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Appid}`
  
  axios.get(api).then(todayWeather)
 }
 const handleSubmit =(event)=>{
  event.preventDefault()
  search()


  }
  
    if(weatherData.ready){
      return(
        <div>
          
        <div className="App container border bg-amber-200 shadow w-[800px] h-[350px] mx-auto mt-10 m-5 rounded p-5 ">
      <a href="https://www.shecodes.io/">
        <img
          src="https://www.weather.shecodes.io/images/logo.png"
          className="logo w-36 mt-5 mx-5"
          alt="SheCodes Logo"
        />
      </a>
      <div>
        <form className="mt-5 flex justify-center gap-10 " onSubmit={handleSubmit}>
          <div className="w-[476px] ">
            <input
              type="text"
              className=" py-[20px] h-[50px] text-[16px]  leading-[20px] w-[500px]  px-[15px] form-control rounded bg-amber-100"
              placeholder="Enter a City"
              onChange={(e)=>{setCity(e.target.value)}}
            />
          </div>
          <div className="w-[200px]">
            <button className="btn bg-yellow-600 rounded px-[15px] h-[50px] text-[16px] w-[100px] leading-[20px] ">
              Search
            </button>
          </div>
        </form>

       <WeatherInfo  data={weatherData} />
      </div>

    </div>
    <div className='text-center'>
      <p className=''>This project was coded by <a href='https://github.com/MYATSD/' className='text-yellow-600 underline'>Hsu Myat Sandi Aung</a> and is <a href="https://github.com/MYATSD/SheCodes-React-Week5" className='text-yellow-600 underline'>open source on Github</a> and <a href="https://bespoke-heliotrope-62a540.netlify.app/" className='text-yellow-600 underline'>hosted on netlify</a> </p>

      </div>

        </div>
      )
     
    }
    else{
       search(  )
      return "Loading..."
    }
    
  ;
};

export default Weather;
