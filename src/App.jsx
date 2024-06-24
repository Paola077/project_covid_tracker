import Home from "./pages/Home"
import "./components/home/nav/nav.css"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard.jsx"
import TotalCases from "./components/tracker1/TotalCases.jsx"
import TotalConfirmed from "./components/tracker1/TotalConfirmed.jsx"
import SelectCountry from "./components/tracker1/SelectCountry.jsx"
import Mapa from "./components/tracker1/mapa/Mapa.jsx"

const App = () =>{
    return(
        <>
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <TotalCases></TotalCases>
        <TotalConfirmed></TotalConfirmed>
        <SelectCountry></SelectCountry>
        <Mapa/>
        </>
    )
}

export default App; 