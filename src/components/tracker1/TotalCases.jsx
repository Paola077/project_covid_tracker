import "./totalCases.css";

const TotalCases = ({ titleStyle, titleValue, casesStyle, casesValue, imageName }) => {
  return (
    <>
      <div className="tarjetaContent">
        <div className="totalCases">
          <h5 className={ titleStyle }>{ titleValue }</h5>
          <p className={ casesStyle }> {casesValue} </p>
        </div>
        <div className="imgContent">
          <img src={`src/assets/img/${ imageName }`} className="img" />
        </div>
      </div>
    </>
  );
};
export default TotalCases;
