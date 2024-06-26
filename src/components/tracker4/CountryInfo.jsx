const CountryInfo = ({ data }) => {
    if (!data) return null;
  
    return (
        <div>
            <h2>{data.country}</h2>
            <p>Total Cases: {data.cases}</p>
            <p>Total Deaths: {data.deaths}</p>
            <p>Total Recovered: {data.recovered}</p>
            <p>Total Active: {data.active}</p>
            <p>New Cases: {data.todayCases}</p>
            <p>New Deaths: {data.todayDeaths}</p>
        </div>
    );
  };
  
  export default CountryInfo;