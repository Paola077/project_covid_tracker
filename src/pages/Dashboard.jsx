import React from 'react'
import SideBar from '../components/tracker0/SideBar'
import "../components/tracker0/sideBar.css"
import { Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <>
        <SideBar />
        <main><Outlet/></main>
        </>
  )
}

export default Dashboard;