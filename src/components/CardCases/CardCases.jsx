import React from "react";
import "./cardCases.css";

const CardCases = (props) => {
  return (
    <>
      <div className={`cardCasesContainer ${props.cardsBgStyle}`}>
        <div className="cardCasesTitle">
          <h5>{props.cardText}</h5>
        </div>
        <div className="flex updatedCasesContainer">
          <p className="todayCasesText">{props.smallTextValue}</p>
        </div>
        <div className="cardCasesData">
          <p className={` ${props.cardDataStyle}`}>
            {props.globalTextDataValue}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardCases;