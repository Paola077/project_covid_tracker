import Home from "./pages/Home"
import "./components/home/nav/nav.css"
import { Route, Routes } from "react-router-dom"
import Tracker1 from "./pages/Tracker1.jsx"
import TotalCases from "./components/tracker1/TotalCases.jsx"


const App = () =>{
    return(
      
    <>
   <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tracker1' element={<Tracker1 />} />
      </Routes>
      <TotalCases></TotalCases>
    
       </>
    )
}

export default App; 