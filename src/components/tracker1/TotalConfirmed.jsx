import { useEffect, useState } from "react";
import axios from "axios";
import "./totalConfirmed.css";

const TotalConfirmed = () => {
  const [totalConfirmed, setTotalConfirmed] = useState(null);
  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/all").then((res) => {
      console.log(res.data.updated);
      setTotalConfirmed(res.data.updated);
    });
  });
  return (
    <>
      <div className="card">
        <div className="box">
          <img src="src/assets/img/covid-defult.svg" className="imgConfirm" />
        </div>
        <div className="totalConfirmed">
          <p>Total Confirmed:</p>
          <p className="txt">{totalConfirmed}</p>
        </div>
      </div>
    </>
  );
};
export default TotalConfirmed;
