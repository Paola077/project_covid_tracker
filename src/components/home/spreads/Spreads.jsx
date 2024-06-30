import './spreads.css'
import TitlesHome from '../titlesHome/TitlesHome'

const Spreads = () => {
    return (
        <>
        <div className='spreadsTitle'>
            <TitlesHome subtitle={'Spreads'} title={'Disease spreads from person to person'}/>
        </div>
        
        <div className='containerSpreads'>
            <div className="containerCard">
                <div className='containerImagesFirst'>
                    <div className="containerBox">
                        <div className="boxCard">
                            <img src="src/assets/img/p-1.jpg" alt="disease"/>
                            <div className="boxText">
                                <h4>Wear facemask</h4>
                                <p>Fever is a key symptom, experts say. Dont' fixate on a number,but know it's really not a fever until your temperature reachest at least 100.</p>
                            </div>    
                        </div>
                    </div>
                    <div className="containerBox">
                        <div className="boxCard">
                        <img src="src/assets/img/p-2.jpg" alt="doctor"/>
                            <div className="boxText">
                                <h4>Wash your hags often</h4>
                                <p>Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest.</p>
                            </div>
                        </div>
                    </div>
                    <div className="containerBox">
                        <div className="boxCard">
                        <img src="src/assets/img/p-3.jpg" alt="cough"/>
                            <div className="boxText">
                                <h4>Keep social distance</h4>
                                <p>Shortness of breath can be a third -- and very serious -- manifestation of Covid-19 and it can occur on its own, without a cough.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                     <div className='containerImagesSecond'>
                        <div className="containerBox">
                            <div className="boxCard">
                            <img src="src/assets/img/p-4.jpg" alt="mask"/>
                                <div className="boxText">
                                    <h4>Wear Facemask</h4>
                                    <p>Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until yout temperature reaches at least 100.</p>
                            </div>
                        </div>
                    </div>
                    <div className="containerBox">
                        <div className="boxCard">
                        <img src="src/assets/img/p-5.jpg" alt="doctor"/>
                            <div className="boxText">
                                <h4>Wash your hangs often</h4>
                                <p>Coughing is another key symptom, but it's not just any cough, said Schaffner.It should be a dry cough that you feel in your chest</p>
                            </div>
                        </div>
                    </div>
                    <div className="containerBox">
                        <div className="boxCard">
                        <img src="src/assets/img/p-6.jpg" alt="cleaning"/>
                            <div className="boxText">
                                <h4>Keep social distance</h4>
                                <p>Shortness of breath can be a third -- and very serious -- manifestation of Covid-19 and it can occur on its own, without a cough.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Spreads;