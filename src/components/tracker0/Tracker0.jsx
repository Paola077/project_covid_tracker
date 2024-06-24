import React from 'react'
import './tracker0.css'
import TopTen from '../TopTen/TopTen'
import useFetch from "../services/UseFetch"
import CardCases from '../CardCases/CardCases'

const Tracker0 = () =>{
    const url = "https://disease.sh/v3/covid-19/";
    const { data } = useFetch(url + "all");
    if (data === null) {
      return <>Loading</>;
    }
    return (

<>
  <div className="columTracker0">
  <div className="scroll-container">
  <div className="scroll-content">
    <div>
        <h2>COVID-19 Tracker</h2>
    </div>
        <CardCases
          key="total"
          cardsBgStyle="cardsBgStyleTotal"
          cardText="Total Case"
          smallTextValue={`+ ${data.todayCases}`}
          cardDataStyle="cardDataStyleTotal"
          globalTextDataValue={data.cases}
        />
        <CardCases
          key="active"
          cardsBgStyle="cardsBgStyleActive"
          cardText="Active Case"
          globalTextDataValue={data.active}
          cardDataStyle="cardDataStyleActive"
        />
        <CardCases
          key="recovered"
          cardsBgStyle="cardsBgStyleRecovered"
          cardText="Recovered Case"
          smallTextValue={`+ ${data.todayRecovered}`}
          globalTextDataValue={data.recovered}
          cardDataStyle="cardDataStyleRecovered"
        />
        <CardCases
          key="deaths"
          cardsBgStyle="cardsBgStyleDeaths"
          cardText="Deaths Case"
          smallTextValue={`+ ${data.todayDeaths}`}
          globalTextDataValue={data.deaths}
          cardDataStyle="cardDataStyleDeaths"
        />
    
    <div>
        <TopTen></TopTen>
    </div>
  </div>
   
  </div>
  </div>
</>
    )}
    export default Tracker0;