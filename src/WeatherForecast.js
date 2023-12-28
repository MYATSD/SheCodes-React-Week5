import React,{useState ,useEffect} from 'react'
// import WeatherIcon from './WeatherIcon'
import WeatherForecastDay from './WeatherForecastDay'
import axios from 'axios'
const WeatherForecast = (props) => {
  
  let lat = props.data.Coord.lat
  let lon = props.data.Coord.lon
 
  const [loaded, setLoaded] = useState(false)
   const [forecast ,setForecast] = useState(null)
   useEffect ( () =>{
    setLoaded(false)},[props])
   const load = () =>{
     const Appid = '72bb9dab46b9ec3d65f423c63f27a9b8'
     const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${Appid}`
     axios.get(api).then(dailyForecast)
     return ' Loading...'
   }

  const dailyForecast = (response)=>{
   setForecast(response.data.daily)
   setLoaded(true)
   console.log(response)

  }
 
 if(loaded){
   return (
     <div className="weatherForecast  mx-auto  max-w-[20px] text-center flex justify-center align-middle">
      <WeatherForecastDay data={forecast}/>
      
        </div>
   )
}
else{
 load()
}
}
export default WeatherForecast