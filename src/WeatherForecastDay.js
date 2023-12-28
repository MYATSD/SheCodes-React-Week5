import React from 'react'
import WeatherIcon from './WeatherIcon';

const WeatherForecastDay = (props) => {
    //  console.log(props.data)
     const data = props.data
    //  console.log(data)


     return(
     
         data.map((d,index)=>{
          function day() {
            let date = new Date(d.dt * 1000)
            let day = date.getDay()
            let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            return days[day]
    
    
            }
          if(index<6){ 
          
           
            return (
            
                <div className='mx-5'>
                          <span>{day()}</span>
                          <div className='flex justify-center'> <WeatherIcon icon={d.weather[0].icon} size= {'32px'} /> </div>
                          <div className="">
                           <span className='mr-2'>{Math.round(d.temp.min)}°C</span> 
                         
                           <span>{Math.round(d.temp.max)}°C</span>
                          </div>
                   </div>
          
         )
           }
           else{
            return null
           }
        
       
        
          // return(
          //   <DailyWeatherInfo icon={d.weather[0].icon} maxTemp={d.temp.max} minTemp={d.temp.min} index={index} key={d.dt} />
          // )
         
        })

       
     )
}

export default WeatherForecastDay