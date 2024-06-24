import React, { useState, useEffect } from 'react';
import axios from '../services/Axios';  
import './tracker0.css';
import TopTen from '../TopTen/TopTen';
import CardCases from '../CardCases/CardCases';

const Tracker0 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = 'all';  

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setError(error);  
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) {
        return <>Loading...</>;
    }

    if (error) {
        return <>Error: {error.message}</>;
    }

    return (
        <div className="columTracker0">
            <div className="scroll-container">
                <div className="scroll-content">
                    <div>
                        <h3>COVID-19 Tracker</h3>
                    </div>
                    <CardCases
                        key="total"
                        cardsBgStyle="cardsBgStyleTotal"
                        cardText="Total Cases"
                        smallTextValue={`+ ${data.todayCases}`}
                        cardDataStyle="cardDataStyleTotal"
                        globalTextDataValue={data.cases}
                    />
                    <CardCases
                        key="active"
                        cardsBgStyle="cardsBgStyleActive"
                        cardText="Active Cases"
                        globalTextDataValue={data.active}
                        cardDataStyle="cardDataStyleActive"
                    />
                    <CardCases
                        key="recovered"
                        cardsBgStyle="cardsBgStyleRecovered"
                        cardText="Recovered Cases"
                        smallTextValue={`+ ${data.todayRecovered}`}
                        globalTextDataValue={data.recovered}
                        cardDataStyle="cardDataStyleRecovered"
                    />
                    <CardCases
                        key="deaths"
                        cardsBgStyle="cardsBgStyleDeaths"
                        cardText="Death Cases"
                        smallTextValue={`+ ${data.todayDeaths}`}
                        globalTextDataValue={data.deaths}
                        cardDataStyle="cardDataStyleDeaths"
                    />
                    <div>
                        <TopTen />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tracker0;
