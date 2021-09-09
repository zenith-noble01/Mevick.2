import "./abssidebar.css"
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'


const AbSidebar = () => {
    return (
        <div className="abssidebar">
            <div className="absidebarTop">
                <span>About</span>
                <div className="div1">
                    <Link to="/" className="div1">
                    <img src={logo} className="
                    absidebarImg"/>
                    <span className="abssidebarTopTitle">MEVICK</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AbSidebar
