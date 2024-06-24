// Topten.jsx
import React, { useState, useEffect } from "react";
import axios from "../services/Axios";  // Importa la instancia de Axios configurada
import "./topTen.css";
import CardTopten from "../CardTopTen/CardTopTen";

const Topten = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = "countries";  // Usa solo el endpoint ya que la base URL está configurada en la instancia de Axios

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) {
        return <>Loading</>;
    }

    const sortedData = data?.sort((a, b) => b.cases - a.cases);
    const topTenCountries = sortedData?.slice(0, 10);

    return (
        <>
            <div className="topTenTitle">
                <p>Top 10 Country</p>
            </div>
            <div>
                {topTenCountries?.map((element) => (
                    <CardTopten
                        key={element.country}  // Usando `country` como clave
                        toptenFlagValue={element.countryInfo.flag}
                        toptenNameCountryValue={element.country}
                        toptenConfirmedCaseCountryValue={element.cases}
                    />
                ))}
            </div>
        </>
    );
};

export default Topten;
