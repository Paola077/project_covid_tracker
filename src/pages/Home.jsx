// import React from 'react'
import Nav from "../components/home/nav/Nav.jsx"
import Footer from '../components/home/footer/Footer.jsx'
import News from '../components/home/news/News.jsx'
import Wash from "../components/home/wash/Wash.jsx"

const Home = () => {
  return (
    <>
      <Nav/>
      <Wash/>
      <News/>
      <Footer/>
    </>
  )
}

export default Home