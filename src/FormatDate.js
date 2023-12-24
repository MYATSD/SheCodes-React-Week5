import React from 'react'

const FormatDate = ({date}) => {
   
   let days = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
   
      console.log(date)
     let dt = new Date(date *1000)
     let day = days[dt.getDay()]
      console.log(day)
      let hour = dt.getHours()
      if(hour<10){
        hour=`0${hour}`
      }

      console.log(hour)
      let minute = dt.getMinutes()
      console.log(minute)
      if(minute<10){
       minute=`0${minute}`
      }
    
  return (
   <div>
    {day} {hour}:{minute}
   </div>
  )
}

export default FormatDate