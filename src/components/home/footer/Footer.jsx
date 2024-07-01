import React from "react";
import LogoWhite from "../../LogoWhite/LogoWhite";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footerTop">
                <div className="Left footer-item">
                    <LogoWhite />
                    <div className="paragraph">
                        <p>These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.</p>
                    </div>
                    <div className="socialNetworks">
                        <span className="tiFacebook">&#xE741;</span>
                        <span className="tiTwitter">&#xE74B;</span>
                        <span className="tiLinkedin">&#xE735;</span>
                        <span className="tiYoutube">&#xE728;</span>
                    </div>
                </div>
                <div className="columns">
                    <div className="column1 footerItem">
                        <p>Quick Links</p>
                        <p>Prevention</p>
                        <p>Quarantine</p>
                        <p>About</p>
                        <p>Help</p>
                    </div>
                    <div className="column2 footerItem">
                        <p>About</p>
                        <p>Hand Wash</p>
                        <p>Social Distance</p>
                        <p>Isolate</p>
                        <p>Difference</p>
                    </div>
                    <div className="column3 footerItem">
                        <p>About</p>
                        <p>Hand Wash</p>
                        <p>Social Distance</p>
                        <p>Isolate</p>
                        <p>Difference</p>
                    </div>
                    <div className="column4 footerItem">
                        <p>Help</p>
                        <p>Hand Wash</p>
                        <p>Social Distance</p>
                        <p>Isolate</p>
                        <p>Difference</p>
                    </div>
                </div>
            </div>
            <hr className="footerLine" />
            <div className="footerB">
                <div className="footerBottonLeft">
                    <span className="copy">&#xF1F9;</span><p className="containerImage">Copyright 2020. All Rights Reserved</p>
                </div>
                <div className="footerBottonRight">
                    <p className="design">Design by <span className="whiteText">DexignZone</span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
