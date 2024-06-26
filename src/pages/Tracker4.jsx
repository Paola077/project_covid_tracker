import React, { useState, useEffect } from 'react';
import TitleComp from "../components/TitlesTrakers/TitleComp";
import { getDataByCountry } from '../components/services/apiService';
import CountryInfo from "../components/tracker4/CountryInfo"
import CountryButton from '../components/tracker4/CountryButton';

const Tracker4 = () => {
    const countries = ['USA', 'Spain', 'Italy', 'India', 'UK', 'France', 'Germany', 'Russia', 'Turkey'];
    const [countryData, setCountryData] = useState({});
    const [selectedCountryData, setSelectedCountryData] = useState(null);

    // useEffect para obtener datos de la API cuando el componente se monta
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtener datos para todos los países usando la función correcta
                const results = await getDataByCountry();

                // Formatear los datos en un objeto
                const data = results.reduce((acc, result) => {
                    acc[result.country] = {
                        country: result.country,
                        cases: result.cases,
                        deaths: result.deaths,
                        recovered: result.recovered,
                        active: result.active,
                        todayCases: result.todayCases,
                        todayDeaths: result.todayDeaths,
                        flag: result.countryInfo.flag
                    };
                    return acc;
                }, {});
                setCountryData(data);
            } catch (error) {
                console.error('Error fetching COVID data by country:', error);
                // Puedes manejar el error aquí según tus necesidades
            }
        };

        fetchData();
    }, []); // Dejamos el array de dependencias vacío para que se ejecute solo una vez al montarse el componente

    // Función para manejar el clic en un botón de país
    const handleCountryClick = (country) => {
        setSelectedCountryData(countryData[country]);
    };

    return (
        <div>
            <TitleComp title="Covid-19 Country Wise - Tabs" />
            <div className="flagContainer">
                {countries.map((country) => (
                    <CountryButton
                        key={country}
                        country={country}
                        flag={countryData[country]?.flag}
                        onClick={() => handleCountryClick(country)} // Llamar a la función con el país
                    />
                ))}
            </div>
            <CountryInfo data={selectedCountryData} />
        </div>
    );
};

export default Tracker4;