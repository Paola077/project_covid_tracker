import React from "react";
import "./news.css";

const News = () => {
    return (
        <div className="wrapper">
            <div className="containerNews">
                <div className="text-center">
                    <h4>News</h4>
                    <h2>Latest News About Corona Virus</h2>
                </div>
                <div className="containerImages">
                    <div className="imageCenter">
                        <img src="src\assets\img\blog-1.jpg" alt="image covid" />
                        <div className="Icons">
                            <span className="themifyIcon">&#xE66E;</span><span className="date">9 Sept 2020</span>
                            <span className="tiComment">&#xE644;</span><span className="comments">2 comments</span>
                        </div>
                        <h3>What should I do if I have COVID-19 symptoms</h3>
                        <a href="#">Continue</a>
                    </div>
                    
                    <div className="imageCenter">
                        <img src="src\assets\img\blog-3.jpg" alt="image testTube" />
                        <div className="Icons">
                            <span className="themifyIcon">&#xE66E;</span><span className="date">8 Sept 2020</span>
                            <span className="tiComment">&#xE644;</span><span className="comments">20 comments</span>
                        </div>
                        <h3>What you need to know About Coronavirus</h3>
                        <a href="#">Continue</a>
                    </div>

                    <div className="imageCenter">
                        <img src="src\assets\img\blog-2.jpg" alt="image facemask" />
                        <div className="Icons">
                            <span className="themifyIcon">&#xE66E;</span><span className="date">7 Sept 2020</span>
                            <span className="tiComment">&#xE644;</span><span className="comments">2 comments</span>
                        </div>
                        <h3>Seek immediate care if you have difficulty breathing</h3>
                        <a href="#">Continue</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
