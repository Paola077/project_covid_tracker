import TitleHome from "../titlesHome/TitlesHome";
import "./symptom.css"

const Symptom=()=>{
    return(
<>
<div className="symptom">
        <TitleHome subtitle={'Symptom'} title={'Basic Symptom Against Corona Virus'}/>
        <div className="boxSymptom">
            <div className="caja box1"  >
               <img src="src/assets/img/banner-right.png" className="sizeImage"/>
                <h3 className="titleCaja">Aches and pains</h3>
                <p className="txtSymptom">Fever is a key symptom, expert say. Don´t fixate on a number, but know it´s really not a fever until your temperature reaches at least 100. </p>

            </div>
            <div className="caja box2">
                <img src="src/assets/img/cough.svg" className="sizeImage"/>
                <h3 className="titleCaja">Runny nose</h3>
                <p className="txtSymptom">People of all ages who experience fever and/or cough associated with difficulty breathing/shortness of breath.</p>

            </div>
            <div className="caja box3">
                <img src="src/assets/img/breathing.svg" className="sizeImage"/>
                <h3 className="titleCaja">Sore throat</h3>
                <p className="txtSymptom">Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer.</p>

            </div>
        </div>
    </div>
</>
)
};
export default Symptom