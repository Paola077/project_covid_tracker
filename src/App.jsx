import Home from "./pages/Home"
import "./components/home/nav/nav.css"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard.jsx"


const App = () =>{
    return(
        <>
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        
        </>
    )
}

export default App; 