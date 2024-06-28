
import "./totalConfirmed.css";

const TotalConfirmed = ({totalTitleStyle,totalTitleValue,confirmedStyle,confirmedValue,imageName}) => {
 
  return (
    <>
      <div className="tarjetaContentTotal">
        <div className="box">
          <img src={`../src/assets/img/${imageName}`} className="imgConfirm" />
        </div>
        <div className="totalConfirmed">
          <span className={totalTitleStyle}>{totalTitleValue}</span>
          <span className={confirmedStyle}>{confirmedValue}</span>
        </div>
      </div>
    </>
  );
};
export default TotalConfirmed;
