import Home from "./pages/Home"
import "./components/home/nav/nav.css"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard.jsx"
import Tracker1 from "./pages/Tracker1.jsx"

const App = () =>{
    return(
        <>
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        
        <Tracker1></Tracker1>
        </>
    )
}

export default App; 