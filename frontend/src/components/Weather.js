import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './apply.css';

const Weather=(props)=>{
const [country,setCountry]=useState([]);

useEffect(()=>{
   let url=`http://api.weatherstack.com/current?access_key=922be7ef63a20dd3876bf9a7d8b4e1e5&query=${props.country}`
axios.get(url).then((r)=>{
    return r.data;
}).then((r)=>{
    console.log(r.current);
    setCountry(state=>[...state,r])
    console.log(country)
})
},[])
    return (
        <>
         <div className="container weather">
        {country.map((value)=>{
            return(
                <>
               <div className="row">temperature : {value.current.temperature}</div>
               <img src={value.current.weather_icons} style={{height:"5%",width:"5%"}}/> 
               <div className="row">Wind Speed : {value.current.wind_speed}</div>
               <div className="row">Precipitation : {value.current.precip}</div>
                </>
            )
        })}

         </div>
        </>
    )

}

export default Weather;