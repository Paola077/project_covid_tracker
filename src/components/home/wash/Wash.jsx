import React from 'react'
import "../faqs/faqs.css"
import TitleHome from '../titlesHome/TitlesHome'

const Wash = () => {
  return (
    <section class="wash">
        <TitleHome subtitle={'Wash'} title={'Wash Your Hands min 20 Second'}/>
    <div class="washImage">
        <img src="src/assets/img/wash.png" alt="logoWash"/>
    </div>
<div class="phoneContainer"> 
    <div class="phoneText">
    <h3>Get the simple app for latest news</h3>
    <p>Human coronaviruses are common and are typically assoiated with mild illnesses, similar to the common cold.</p>
    <button class="downloadNow">Download now</button>
</div>
<div class="imagePhone">
    <img src="src/assets/img/phone-1.png" alt="imagePhone"/>
</div>

</div>
   </section>
  )
}

export default Wash