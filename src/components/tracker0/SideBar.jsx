
import { Link } from "react-router-dom"



const SideBar = () =>{
    return (

<aside>
    <div className="navSide">
    <div>
        <Link to={"/"}>
        <img className="logoSide" src="src/assets/img/favicon.png" alt="logo sidebar" />
        </Link>
    </div>
    <div className='menuSideBar'>
    <ul>
        <Link to="/dashboard/tracker1"><li><span className="ChartPie">&#xE684;</span></li></Link>                                                                                                                                                                                                                        
       <Link to="/dashboard/tracker2"><li><span className="Bars3">&#xE667;</span></li></Link>    
       <Link to="/dashboard/tracker3"> <li><span className="Squares">&#xE669;</span></li></Link>
          <Link to="/dashboard/tracker4"><li><span className="Folder">&#xE6EB;</span></li></Link>
            <li><span className="SquaresStack">&#xE630;</span></li>
            <li><span className="ArrowTrendingUp">&#xE673;</span></li>
            <li><span className="GlobeAlt">&#xE665;</span></li>
            <li><span className="ChatBubbleLeft">&#xE644;</span></li>
            <li><span className="CircleIcon">&#xE759;</span></li>
        </ul>
    </div>
    </div>
    </aside>
    )}
    export default SideBar