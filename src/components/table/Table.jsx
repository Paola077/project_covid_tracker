import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import './table.css';
import axios from "axios";

const Table = () => {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);


    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/countries')
            .then(response => {
                setData(response.data);
                setRecords(response.data)
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);
    

    const columns = [
        {
            name: 'Flag',
            selector: row => <img src={row.countryInfo.flag} alt={`Flag of ${row.country}` } style={{ width: '40px' }}/>,
            sortable: false,
        },
        {
            name: 'Country',
            selector: row => row.country,
            sortable: true,
        },
        {
            name: 'Cases',
            selector: row => row.cases,
            sortable: true,
        },
        {
            name: 'New Cases',
            selector: row => row.newCases,
            sortable: true,
        },
        {
            name: 'Deaths',
            selector: row => row.deaths,
            sortable: true,
        },
        {
            name: 'New Deaths',
            selector: row => row.newDeaths,
            sortable: true,
        },
        {
            name: 'Recovered',
            selector: row => row.recovered,
            sortable: true,
        },
        {
            name: 'Active',
            selector: row => row.active,
            sortable: true,
        },
        {
            name: 'Critical',
            selector: row => row.critical,
            sortable: true,
        },
        {
            name: 'Tested',
            selector: row => row.tested,
            sortable: true,
        },
    ]
    
    const handleChange = (e) => {
        const filteredRecords = data.filter(record =>{
            return record.country.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRecords(filteredRecords)
    };
    

    return (
        <div className="tableT2">
            <div className="controlsT2">
                <label className="searchT2">
                Search:
                <input type="text" onChange={handleChange} />
                </label>
            </div>
            <DataTable
                columns={columns}
                data={records}
                pagination
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10, 20, 30, 50]}
                fixedHeader
                customStyles={customStyles}
            />
            </div>
        );
    };
    
    const customStyles = {
        headCells: {
            style: {
            color: '#12125C',
            backgroundColor: 'transparent',
            fontWeight: 'bold',
            },
        },
        rows: {
            style: {
            color: '#12125C',
            backgroundColor: '#F8F9FE',
            '&:nth-of-type(odd)': {
                backgroundColor: '#F8F9FE',
            },
            '&:nth-of-type(even)': {
                backgroundColor: '#E8E9FE',
            },
            },
        },
        pagination: {
            style: {
            color: '#333',
            fontSize: '0.69rem',
            minHeight: '2.5rem',
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            },
            pageButtonsStyle: {
            borderRadius: '0.15rem',
            padding: '0.5rem',
            margin: '0.13rem',
            cursor: 'pointer',
            transition: '0.4s',
            color: 'red',
            backgroundColor: '#fff',
            '&:hover': {
                backgroundColor: '#12125C',
                fill:'white'
            },
            },
        },
    };
    
    export default Table;
