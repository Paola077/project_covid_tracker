import {useEffect, useState} from 'react';
import axios from 'axios';


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
<div>
    <h3>Total Cases</h3>
    {country}
    <p>{totalCases}</p>
    <img src="src/assets/img/covid-defult.svg"/>
</div>
</>
)
}
export default TotalCases