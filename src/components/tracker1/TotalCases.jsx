import {useEffect, useState} from 'react';
import axios from 'axios';
import "./totalCases.css"


const TotalCases=()=>{
    const [country, setCountry]= useState(null);
    const [totalCases, setCases]= useState(null);
    useEffect(()=>{
        axios.get('https://disease.sh/v3/covid-19/countries/usa')
        .then(res=>{
            console.log(res.data.country);
            setCountry(res.data.country);
            setCases(res.data.cases)
        })
    })
return(
<>
<div className='totalCases'> 
    <p>Total Cases:{country}</p>
    <p className='txt'>{totalCases}</p>
    <img src="src/assets/img/covid-defult.svg" className='img'/>
</div>
</>
)
}
export default TotalCases