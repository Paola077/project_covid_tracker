// import React from 'react'
import Faqs from '../components/home/faqs/Faqs.jsx'
import Footer from '../components/home/footer/Footer.jsx'
import HomeTop from '../components/home/homeTop/HomeTop.jsx'
import News from '../components/home/news/News.jsx'


import Wash from "../components/home/wash/Wash.jsx"

const Home = () => {
  return (
    <>
      <HomeTop/>
      <Faqs/>
      <Wash/>
      <News/>
      <Footer/>
    </>
  )
}

export default Home