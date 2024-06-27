// import React from 'react'
import Nav from "../components/home/nav/Nav.jsx"
import Footer from '../components/home/footer/Footer.jsx'
import News from '../components/home/news/News.jsx'
import Symptom from "../components/home/Symptom/Symptom.jsx"

const Home = () => {
  return (
    <>
      <Nav/>
      <Symptom/>
      <News/>
      <Footer/>
    </>
  )
}

export default Home