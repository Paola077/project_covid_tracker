import React from 'react'
import SideBar from '../components/tracker0/SideBar'
import "../components/tracker0/sideBar.css"
import { Outlet } from 'react-router-dom'
import Tracker0 from '../components/tracker0/Tracker0'


const Dashboard = () => {
  return (
    <>
        <SideBar />
        <Tracker0 />
        <main><Outlet/></main>
        </>
  )
}

export default Dashboard;