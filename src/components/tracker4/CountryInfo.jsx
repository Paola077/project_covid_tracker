import "./countryInfo.css"
const CountryInfo = ({ data }) => {
    if (!data) return null;
  
    return (
        <div className="containerCardsTracker4">
            
            <div className="tCases"><span className="cardTitleT4">Total Cases:<hr className="lineCards"/></span><span className="NumberT4Navy">{data.cases}</span></div>
            <div className="tDeaths"><span className="cardTitleT4">Total Deaths:<hr className="lineCards"/></span><span className="NumberT4Red">{data.deaths}</span></div>
            <div className="tRecovered"><span className="cardTitleT4">Total Recovered:<hr className="lineCards"/></span><span className="NumberT4Green">{data.recovered}</span></div>
            <div className="tActive"><span className="cardTitleT4">Total Active:<hr className="lineCards"/></span><span className="NumberT4Blue">{data.active}</span></div>
            <div className="nCases"><span className="cardTitleT4">New Cases:<hr className="lineCards"/></span><span className="NumberT4Orange">{data.todayCases}</span></div>
            <div className="nDeaths"><span className="cardTitleT4">New Deaths:<hr className="lineCards"/></span><span className="NumberT4Wine">{data.todayDeaths}</span></div>
        </div>
    );
  };
  
  export default CountryInfo;