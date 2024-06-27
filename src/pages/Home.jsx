import React from 'react'
import Nav from "../components/home/nav/Nav.jsx"
import Footer from '../components/home/footer/Footer.jsx'
import News from '../components/home/news/News.jsx'

const Home = () => {
  return (
    <>
      <Nav/>
      <News/>
      <Footer/>
    </>
  )
}

export default Home