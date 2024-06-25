import SelectCountry from "../components/tracker1/SelectCountry.jsx";
import  { useState, useEffect } from "react";

import TotalCases from "../components/tracker1/TotalCases.jsx"
import TotalConfirmed from "../components/tracker1/TotalConfirmed.jsx"
import Mapa from "../components/tracker1/mapa/Mapa.jsx"
import axios from "axios";

const Tracker1 = () => {
    const url = "https://disease.sh/v3/covid-19/";
    const [countriesData, setCountriesData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
  
    useEffect(() => {
        // Función para obtener datos de los países
        const fetchCountriesData = async () => {
          try {
            const response = await axios.get(url + "countries");
            setCountriesData(response.data);
            if (response.data.length > 0 && !selectedCountry) {
              setSelectedCountry(response.data[0].country);
            }
          } catch (error) {
            console.error("Error fetching countries data:", error);
          }
        };
    
        // Llamar a la función para obtener los datos
        fetchCountriesData();
      }, [selectedCountry]); // Dependencia vacía para que solo se ejecute una vez al montar el componente
    
      const handleCountryChange = (country) => {
        setSelectedCountry(country);
      };
    
      if (countriesData.length === 0) {
        return <>Loading</>; // Muestra un mensaje de carga mientras se obtienen los datos
      }
    
      const countryData = countriesData.find(
        (country) => country.country === selectedCountry
      );
    
      return (
        <>
        <div>
       
        </div>
        <div>
        <TotalConfirmed></TotalConfirmed>
        </div>
        <div>
        <Mapa/>
        </div>
        <div>
          <SelectCountry
            countries={countriesData}
            selectedCountry={selectedCountry}
            onCountryChange={handleCountryChange}
          />
          <div>
            <TotalCases
             dataTitleGlobal="dataTitleGlobal"
             cardDataTittle={`Total Cases`}
             dataGlobalstyle="dataGlobalstyleBlue"
             dataGlobalCountriesValue={countryData.cases}
            ></TotalCases>
          </div>
          
        </div>
        </>
      );
    };
    
    export default Tracker1;