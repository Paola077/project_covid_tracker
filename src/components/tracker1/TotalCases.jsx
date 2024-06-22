import { useEffect, useState } from "react";
import axios from "axios";
import "./totalCases.css";

const TotalCases = () => {
  const [totalCases, setCases] = useState(null);
  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/countries/usa").then((res) => {
      console.log(res.data.cases);
      setCases(res.data.cases);
    });
  });
  return (
    <>
      <div className="tarjetaContent">
        <div className="totalCases">
          <p>Total Cases:</p>
          <p className="txt">{totalCases}</p>
        </div>
        <div className="imgContent">
          <img src="src/assets/img/covid-defult.svg" className="img" />
        </div>
      </div>
    </>
  );
};
export default TotalCases;
