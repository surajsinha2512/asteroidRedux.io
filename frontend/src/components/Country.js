import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Weather from './Weather';
import './apply.css';

const Country=(props)=>{
const [data,setData]=useState(props.data);
const [details,setDetails]=useState([]);
const [weather,showWeather]=useState(false);
const [capital,setCapital]=useState(props.data)

useEffect(()=>{
let url=`https://restcountries.eu/rest/v2/name/${data}`;
axios.get(url).then((r)=>{
   // console.log(r)
    return r.data;
}).then((r)=>{
    console.log(r)
   setDetails(state=>[...state,...r])
})

},[])

const clickHandler=()=>{
    showWeather(true)
}

    return (
        <>
        <div className="container country">
       {details.map((value)=>{
           return (
               <>
           
               <div className="col"> 
               <div className="row"> Capital : {value.capital}</div>
               <div className="row">population : {value.population}</div>
               <div className="row">Latlng : {value.latlng}</div>
               <img src={value.flag} style={{height:"20%",width:"30%"}}/> 
               </div>
               <button className="btn btn-success m-5" onClick={clickHandler} > Capital Weather </button>
            
             
               </>
           )
       })}
       {weather? <Weather country={props.data}/> :null}
        </div>
        </>
    )
}

export default Country;