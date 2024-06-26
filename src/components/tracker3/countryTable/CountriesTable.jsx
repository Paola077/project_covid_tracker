import React, { useState, useEffect} from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { columnsTopCases, columnsTodayCases, columnsTodayDeaths, columnsTopActive, columnsTodayrecovered, columnsTodayDeathsSecond } from "./dataColumns";
import './countriesTable.css'
import { dataFake } from "../cards/dataFake";

 const CountriesTable = () => {
   /* const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://disease.sh/v3/covid-19/countries/");
                const sortedData = response.data.sort((a, b) => b.active - a.active); 
                console.log("Sorted data:", sortedData);
                const topTenData = sortedData.slice(0, 10);
                console.log("Top 10 data:", topTenData);
                setData(topTenData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>; */
    return (
        <>
            <div className="containerTable"> 
                <DataTable
                columns={columnsTopCases}
                data={dataFake}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayCases}
                data={dataFake}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayDeaths}
                data={dataFake}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayDeathsSecond}
                data={dataFake}
                pagination={false}
                />
                <DataTable
                columns={columnsTopActive}
                data={dataFake}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayrecovered}
                data={dataFake}
                pagination={false}
                />
            </div>
        </>
    );
};

export default CountriesTable;