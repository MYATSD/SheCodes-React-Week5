import React, { useState } from 'react'

const WeatherTemperature = ({temp}) => {
    const [unit , setUnit] = useState("Celsius")
    const toFahrenheit =(event) =>{
        event.preventDefault()
        setUnit("Fahrenheit")
    }

    const toCelsius= (event)=> {
        event.preventDefault()
        setUnit("Celsius")
    }
   if(unit==="Celsius"){
    return ( <div className='ml-5'>
    <span className="temperature font-[700] text-[80px]">{Math.round(temp)}</span>
    <span className="relative top-[-34px] text-[28px] font-[400]">°C|<a href="/" className="text-yellow-600 font-[500]" onClick={toFahrenheit}>°F</a></span></div>)
   }
   else{
    return (
        <div className='ml-5'>
    <span className="temperature font-[700] text-[80px]">{Math.round((temp * 9/5) + 32)}</span>
    <span className="relative top-[-34px] text-[28px] font-[400]"><a href="/" className="text-yellow-600 font-[500]" onClick={toCelsius}>°C |</a>°F</span></div>)
   
    
   }

 

 
}

export default WeatherTemperature