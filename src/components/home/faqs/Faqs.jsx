import React from 'react'
import "../faqs/faqs.css"
import TitleHome from '../titlesHome/TitlesHome'


const Faqs = () => {
  return (
    <section class="faq">  
            <TitleHome subtitle={'Faqs'} title={'Frequently Asked Questions'} />    
        <div class="faqsContainer">
        <div class="faqLeft">
        <div class="spread">
        <h4>01. How does COVID spread? </h4>
            <p> Data has shown that it spreads from person among 
            those in close contact(within about 6 feet, or two meters). The virus 
            spreads by respiratory droplets relesed when someone infected 
            with the virus.
        </p>
        </div>
        <div class="symtoms">
            <h4>02. What are the symtoms of COVID-19?</h4>
        </div>
    
        <div class="mask">
            <h4>03. Should i wear mask?</h4>
        </div>
    </div>
        <div class="faqRight">
        <div class="isolete">
            <h4>04. What does it mean to self-isolete?</h4>
        </div>
        <div class="catch">
            <h4>05. Can children or adolescents catch COVID-19?</h4>
        </div>
        <div class="drug">
            <h4>06. Is there a vacine or drug for COVID-19? </h4>
                <p> While some westerns, tradicional or home remedies may provide 
                comfort and alleviate simptomps of mild COVID-19, there are no 
                medicines that have been shown to prevent or cure the disease. 
                WHO has not recommended self-medication with any medicines.
            </p>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Faqs