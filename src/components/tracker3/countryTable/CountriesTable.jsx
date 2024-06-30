import React, { useState, useEffect} from "react";
import DataTable from "react-data-table-component";
import { columnsTopCases, columnsTodayCases, columnsTodayDeaths, columnsTopActive, columnsTodayrecovered, columnsTodayDeathsSecond } from "./dataColumns";
import './countriesTable.css'
import { getDataByCountry } from "../../../services/apiService";

const getTopCases = (result) => {
    const sortedData = result.sort((a, b) => b.updated - a.updated); 
    console.log("Sorted data:", sortedData);
    const topTenData = sortedData.slice(0, 10);
    console.log("Top 10 data:", topTenData);
    return topTenData;
}

const getTodayCases = (result) => {
    const sortedData = result.sort((a, b) => b.todayCases - a.todayCases); 
    console.log("Sorted data:", sortedData);
    const topTenData = sortedData.slice(0, 10);
    console.log("Top 10 data:", topTenData);
    return topTenData;
}

const getTodayDeaths = (result) => {
    const sortedData = result.sort((a, b) => b.todayDeaths - a.todayDeaths); 
    console.log("Sorted data:", sortedData);
    const topTenData = sortedData.slice(0, 10);
    console.log("Top 10 data:", topTenData);
    return topTenData;
}

const getTodayDeathsSecond = (result) => {
    const sortedData = result.sort((a, b) => b.todayDeaths - a.todayDeaths); 
    console.log("Sorted data:", sortedData);
    const topTenData = sortedData.slice(0, 10);
    console.log("Top 10 data:", topTenData);
    return topTenData;
}

const getTopActive = (result) => {
    const sortedData = result.sort((a, b) => b.todayRecovered - a.todayRecovered); 
    console.log("Sorted data:", sortedData);
    const topTenData = sortedData.slice(0, 10);
    console.log("Top 10 data:", topTenData);
    return topTenData;
}

const getTodayRecovered = (result) => {
    const sortedData = result.sort((a, b) => b.active - a.active); 
    console.log("Sorted data:", sortedData);
    const topTenData = sortedData.slice(0, 10);
    console.log("Top 10 data:", topTenData);
    return topTenData;
}

 const CountriesTable = () => {
    const [dataTopCases, setDataTopCases] = useState([]);
    const [dataTodayCases, setDataTodayCases] = useState([]);
    const [dataTodayDeaths, setDataTodayDeaths] = useState([]);
    const [dataTodayDeathsSecond, setDataTodayDeathsSecond] = useState([]);
    const [dataTopActive, setDataTopActive] = useState([]);
    const [dataTodayrecovered, setDataTodayrecovered] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getDataByCountry();
            setDataTopCases(getTopCases(result));
            setDataTodayCases(getTodayCases(result));
            setDataTodayDeaths(getTodayDeaths(result));
            setDataTodayDeathsSecond(getTodayDeathsSecond(result));
            setDataTopActive(getTopActive(result));
            setDataTodayrecovered(getTodayRecovered(result));
          } catch (error) {
            console.error('Error fetching country data: ', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <>
            <div className="containerTable"> 
                <DataTable
                columns={columnsTopCases}
                data={dataTopCases}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayCases}
                data={dataTodayCases}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayDeaths}
                data={dataTodayDeaths}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayDeathsSecond}
                data={dataTodayDeathsSecond}
                pagination={false}
                />
                <DataTable
                columns={columnsTopActive}
                data={dataTopActive}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayrecovered}
                data={dataTodayrecovered}
                pagination={false}
                />
            </div>
        </>
    );
};

export default CountriesTable;