import "./abssidebar.css"
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from "react"

const AbSidebar = () => {

    // const [sidebar, setSidebar] = useState(false)
    const [sidebarDropdown, setSidebarDropdown] = useState(true)
    return (
        <div className="abssidebar">
            <div className="absidebarTop">
                <span>About</span>
                <div className="div1">
                    <Link to="/" className="div1">
                    <img src={logo} className="
                    absidebarImg" alt="the mevick logo"/>
                    <span className="abssidebarTopTitle">MEVICK</span>
                    </Link>
                </div>
            </div>
            <div className="sidebarInput">
                <i className="searchIcon fa fa-search"></i>
                <input type="text" placeholder="Search" />
            </div>
            <div className="sidebarWrapper">
                <ul className="sidebarItem">
                    <li className="sidebarItemList1" onClick={() => setSidebarDropdown(!sidebarDropdown)}><i className="sidbarDropIcon fas fa-university"></i> Institution <i className={sidebarDropdown? 'chev fas fa-chevron-down' : "chev fas fa-chevron-up"}></i></li>
                    <ul className={sidebarDropdown ? "drop" : "dropdownList"}>
                        <li className="dropdownItem"><i className="sidbarDropIcon fas fa-book-open"></i>Library</li>
                        <li className="dropdownItem"><i className="sidbarDropIcon fas fa-flask"></i>Labs</li>
                        <li className="dropdownItem"><i className="sidbarDropIcon fas fa-shield-alt"></i>Fields</li>
                        <li className="dropdownItem"><i className="sidbarDropIcon fas fa-cookie-bite"></i>Cantine</li>
                        <li className="dropdownItem"><i className="sidbarDropIcon fas fa-binoculars"></i>Overview</li>
                    </ul>
                    <li className="sidebarItemList">School</li>
                    <li className="sidebarItemList">Past Result</li>
                    <li className="sidebarItemList">Location</li>
                    <li className="sidebarItemList">registration</li>
                </ul>
            </div>
        </div>
    )
}

export default AbSidebar
