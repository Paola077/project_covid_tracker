
import "./totalConfirmed.css";

const TotalConfirmed = ({totalTitleStyle,totalTitleValue,confirmedStyle,confirmedValue,imageName}) => {
 
  return (
    <>
      <div className="card">
        <div className="box">
          <img src={`src/assets/img/${imageName}`} className="imgConfirm" />
        </div>
        <div className="totalConfirmed">
          <p className={totalTitleStyle}>{totalTitleValue}</p>
          <p className={confirmedStyle}>{confirmedValue}</p>
        </div>
      </div>
    </>
  );
};
export default TotalConfirmed;
