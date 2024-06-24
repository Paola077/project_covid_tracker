import  { useState, useEffect } from "react";
import './selectCountry.css'
import axios from "axios";

const SelectCountry = ({ select }) => {
    const [allCountries, setAllCountries] = useState(null);
    const [loading, setLoading] = useState(true);
    const url = "https://disease.sh/v3/covid-19/countries";
  
    useEffect(() => {
      axios.get(url)
        .then(res => {
          setAllCountries(res.data);
          setLoading(false);
        })
    });
  
    const countryChange = (selectedCountry) => {
        select(selectedCountry);
    };
  
    if (loading) {
      return <>Loading</>;
    }
  
    return (
      <div className="container">
        <select className="selectCountry" name="countries" id="countries"
          onChange={(chose) => countryChange(chose.target.value)}
        >
          <option value="country">Select a Country</option>
          {allCountries.map((countryObject) => (
            <option className="option" key={countryObject.country} value={countryObject.country}>
              {countryObject.country}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SelectCountry;