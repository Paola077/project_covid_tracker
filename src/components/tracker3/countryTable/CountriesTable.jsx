import React, { useState, useEffect} from "react";
import DataTable from "react-data-table-component";
import { columnsTopCases, columnsTodayCases, columnsTodayDeaths, columnsTopActive, columnsTodayrecovered, columnsTodayDeathsSecond } from "./dataColumns";
import './countriesTable.css'
import { getDataByCountry } from "../../services/apiService";

 const CountriesTable = () => {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getDataByCountry();
            setData(result);
            setData(topTenData);
          } catch (error) {
            console.error('Error fetching global data: ', error);
          }
        };
    
        fetchData();
      }, []);
    
      if (data === null) {
        return <>Loading</>;
      }

    return (
        <>
            <div className="containerTable"> 
                <DataTable
                columns={columnsTopCases}
                data={data}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayCases}
                data={data}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayDeaths}
                data={data}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayDeathsSecond}
                data={data}
                pagination={false}
                />
                <DataTable
                columns={columnsTopActive}
                data={data}
                pagination={false}
                />
                <DataTable
                columns={columnsTodayrecovered}
                data={data}
                pagination={false}
                />
            </div>
        </>
    );
};

export default CountriesTable;