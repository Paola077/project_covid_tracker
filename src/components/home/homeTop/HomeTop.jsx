import React from "react";
import './homeTop.css'
import Nav from './nav/Nav'

const HomeTop = () => {
    
    return(

        <div className="body">
            <Nav/>
            <section>
                <div id="info">
                    <h1 className="homeH1">Stay Home, And Prayer For Victim Of Corona virus.</h1>
                    <p id="subtitle">Human coronaviruses are common and are typically associated with 
                        mild illnesses, similar to the common cold. The corona virus COVID-19 is 
                        affecting 210 countries & territories around the world and 2 international conveyances</p>
                        <div id="card">
                            
                        </div>
                </div>
                <aside className="roundbuttonBox">
                    <button className="roundbutton red"><span className="icon">&#xf064;</span></button>
                    <button className="roundbutton blue"><span className="inconos">&#xe69d;</span></button>
                    <button className="roundbutton green"><span className="inconos">&#xe60d;</span></button>
                </aside>
                <div id="illustration"><img src="src/assets/img/banner-right-image1.png"/></div>
            </section>
        </div>
    )
    
    
};

export default HomeTop;