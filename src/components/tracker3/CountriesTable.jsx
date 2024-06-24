import React, { useState, useEffect} from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

 const CountriesTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const columns = [
          {
            name: 'Top Cases',
            selector: row => (
              <div>
                <img src={row.countryInfo.flag} alt={`${row.country} flag`} width={30} height={20} style={{ marginRight: '10px' }} />
                {row.country} {row.updated}
              </div>
              ),
            sortable: true
          },
          {
            name: 'Today Cases',
            selector: row => ( 
            <div>
              <img src={row.countryInfo.flag} alt={`${row.country} flag`} width={30} height={20} style={{ marginRight: '10px' }} />
              {row.country} {row.todayCases}
            </div>
            ),
            sortable: true
          },
          {
            name: 'Today Deaths',
            selector: row => `${row.country} ${row.todayDeaths}`,
            sortable: true
          },
          {
            name: 'Today Deaths',
            selector: row => `${row.country} ${row.todayDeaths}`,
            sortable: true
          },
          {
            name: 'Top Active',
            selector: row => `${row.country} ${row.active}`,
            sortable: true
          },
          {
            name: 'Today Recovered',
            selector: row => `${row.country} ${row.recovered}`,
            sortable: true
          }
    ]

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
    if (error) return <div>Error: {error.message}</div>; 
    return (
        <>
            <div> 
                <DataTable
                columns={columns}
                data={data}
                pagination={false}
                />
            </div>
        </>
    );
};

export default CountriesTable;