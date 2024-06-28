import SelectCountry from "../components/tracker1/SelectCountry.jsx";
import { useState, useEffect } from "react";
import TotalCases from "../components/tracker1/TotalCases.jsx";
import {
  getDataByCountry,
  getDataGlobal,
} from "../services/apiService.js";
import TotalConfirmed from "../components/tracker1/TotalConfirmed.jsx";
import Mapa from "../components/tracker1/mapa/Mapa.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Tracker1 = () => {
  const [data, setData] = useState([]);
  const [dataGlobal, setDataGlobal] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("DEFAULT");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataByCountry();
        result[result.length] = {
          country: "DEFAULT",
          cases: 0,
          todayCases: 0,
          deaths: 0,
          todayDeaths: 0,
          recovered: 0,
          todayRecovered: 0,
          active: 0,
        };
        setData(result);
        const resultGlobal = await getDataGlobal();
        setDataGlobal(resultGlobal);
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
  const globalData = dataGlobal;

  return (
    <div style={{ backgroundColor: "#F7F8FC" }}>
      <div>
        <div className="row">
          <div className="col-md-4">
            <SelectCountry onSelectCountry={handleSelectCountry} />
          </div>
          <div className="col-md-8 p-4">
            <div className="text-end">Updated July 01, 2024</div>
          </div>
        </div>
        <hr className="style-hr my-3"></hr>
        {countryData && (
          <div className="container my-3">
            <div className="row">
              <div className="col-md-3 order-md-1">
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
                  imageName="covid-green.svg"
                />
                <TotalCases
                  key={`NC-${countryData.country}`}
                  titleStyle="titleStyle"
                  titleValue="New Cases"
                  casesStyle="casesStyleOrange"
                  casesValue={countryData.todayCases}
                  imageName="covid-orange.svg"
                />
              </div>
              <div className="col-md-3 order-md-2">
                <TotalCases
                  key={`TD-${countryData.country}`}
                  titleStyle="titleStyle"
                  titleValue="Total Deaths"
                  casesStyle="casesStyleRed"
                  casesValue={countryData.deaths}
                  imageName="covid-red.svg"
                />
                <TotalCases
                  key={`TA-${countryData.country}`}
                  titleStyle="titleStyle"
                  titleValue="Total Active"
                  casesStyle="casesStyleLightBlue"
                  casesValue={countryData.active}
                  imageName="covid-blue.svg"
                />
                <TotalCases
                  key={`ND-${countryData.country}`}
                  titleStyle="titleStyle"
                  titleValue="New Deaths"
                  casesStyle="casesStyleDarkRed"
                  casesValue={countryData.todayDeaths}
                  imageName="covid-redark.svg"
                />
              </div>
              <div className="col-md-6 order-md-3">
                <Mapa />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="container my-3">
        <div className="d-flex flex-row justify-content-between">
          <div className="me-3">
          <TotalConfirmed
            key={`${globalData.all}`}
            totalTitleStyle="totalTitleStyle"
            totalTitleValue="Total Confimed"
            confirmedStyle="confirmedStyle"
            confirmedValue={globalData.cases}
            imageName="covid-defult.svg"
          />
          </div>
          <div className="me-3">
          <TotalConfirmed
            key={`${globalData.all}`}
            totalTitleStyle="totalTitleStyle"
            totalTitleValue="Total Recovered"
            confirmedStyle="confirmedStyle"
            confirmedValue={globalData.recovered}
            imageName="covid-green.svg"
          />
          </div>
           <div className="me-3">
          <TotalConfirmed
            key={`${globalData.all}`}
            totalTitleStyle="totalTitleStyle"
            totalTitleValue="Total Deaths"
            confirmedStyle="confirmedStyle"
            confirmedValue={globalData.deaths}
            imageName="covid-red.svg"
          />
          </div>
           <div className="me-3">
          <TotalConfirmed
            key={`${globalData.all}`}
            totalTitleStyle="totalTitleStyle"
            totalTitleValue="New Deaths"
            confirmedStyle="confirmedStyle"
            confirmedValue={globalData.todayDeaths}
            imageName="covid-red.svg"
          />
          </div>
          <div className="me-3">
          <TotalConfirmed
            
            totalTitleStyle="totalTitleStyle"
            totalTitleValue="Help Line No."
            confirmedStyle="confirmedStyle"
            confirmedValue="198"
            imageName="telephone.svg"
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Tracker1;
