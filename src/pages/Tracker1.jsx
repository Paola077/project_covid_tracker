import SelectCountry from "../components/tracker1/SelectCountry.jsx";
import { useState, useEffect } from "react";
import TotalCases from "../components/tracker1/TotalCases.jsx";
import {getCovidDataByCountry,getCovidDataGlobal} from "../services/apiServices.js";
import TotalConfirmed from "../components/tracker1/TotalConfirmed.jsx";
import Mapa from "../components/tracker1/mapa/Mapa.jsx"

const Tracker1 = () => {
  const [data, setData] = useState([]);
  const [dataGlobal, setDataGlobal] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("DEFAULT");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCovidDataByCountry();
        result[result.length] = {
          "country": "DEFAULT",
          "cases": 0,
          "todayCases": 0,
          "deaths": 0,
          "todayDeaths": 0,
          "recovered": 0,
          "todayRecovered": 0,
          "active": 0
        };
        setData(result);
        const resultGlobal = await getCovidDataGlobal();
        setDataGlobal(resultGlobal); //borrar el dataglobal
      } catch (error) {
        console.error("Error fetching COVID data:", error);
      }
    };
    fetchData();
  }, []); 

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };
  const countryData = data.find(
    (country) => country.country === selectedCountry
  );
  const globalData=dataGlobal

  return (
    <div>
      
      <div>
        <div>
        <SelectCountry onSelectCountry={handleSelectCountry} />
        </div>
        {countryData && (
          <>
            <div className="columnas">
              <div className="totalCasesColumOne">
                <TotalCases
                  key={`TC-${countryData.country}`}
                  titleStyle="titleStyle"
                  titleValue="Total cases"
                  casesStyle="casesStyleBlue"
                  casesValue={countryData.cases}
                  imageName="covid-defult.svg"
                />
                <TotalCases
                  key={`TR-${countryData.country}`}
                  titleStyle="titleStyle"
                  titleValue="Total Recovered"
                  casesStyle="casesStyleGreen"
                  casesValue={countryData.recovered}
                  imageName="covid-defult.svg"
                />
                <TotalCases
                  key={`NC-${countryData.country}`}
                  titleStyle="titleStyle"
                  titleValue="New Cases"
                  casesStyle="casesStyleOrange"
                  casesValue={countryData.todayCases}
                
                />
              </div>
              <div className="totalCasesColumTwo">
              <TotalCases
                  key={`TD-${countryData.country}`}
                  titleStyle="titleStyle"
                  titleValue="Total Deaths"
                  casesStyle="casesStyleBlue"
                  casesValue={countryData.deaths}
                  imageName="covid-defult.svg"
                />
                <TotalCases
                  key={`TA-${countryData.country}`}
                  titleStyle="titleStyle"
                  titleValue="Total Active"
                  casesStyle="casesStyleBlue"
                  casesValue={countryData.active}
                />
                <TotalCases
                  key={`ND-${countryData.country}`}
                  titleStyle="titleStyle"
                  titleValue="New Deaths"
                  casesStyle="casesStyleBlue"
                  casesValue={countryData.todayDeaths}
                  imageName="covid-defult.svg"
                />
              </div>
              <div>
                <Mapa/>
              </div>
            </div>
          </>
        )}
      </div>
    <div className="totalConfirmedLine">
      <TotalConfirmed
      key={`${globalData.all}`}
      totalTitleStyle="totalTitleStyle"
      totalTitleValue="Total Confimed"
      confirmedStyle="confirmedStyle"
      confirmedValue={globalData.cases}
      imageName="covid-defult.svg"
      />
      <TotalConfirmed
      key={`${globalData.all}`}
      totalTitleStyle="totalTitleStyle"
      totalTitleValue="Total Recovered"
      confirmedStyle="confirmedStyle"
      confirmedValue={globalData.recovered}
      imageName="covid-green.svg"
      />
      <TotalConfirmed
      key={`${globalData.all}`}
      totalTitleStyle="totalTitleStyle"
      totalTitleValue="Total Deaths"
      confirmedStyle="confirmedStyle"
      confirmedValue={globalData.deaths}
      imageName="covid-red.svg"
      />
      <TotalConfirmed
      key={`${globalData.all}`}
      totalTitleStyle="totalTitleStyle"
      totalTitleValue="New Deaths"
      confirmedStyle="confirmedStyle"
      confirmedValue={globalData.todayDeaths}
      imageName="covid-red.svg"
      />
      
    </div>
    </div>
  );
};
export default Tracker1;
