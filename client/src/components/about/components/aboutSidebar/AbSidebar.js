import "./abssidebar.css"
import { useState } from "react"

const AbSidebar = () => {

    // const [sidebar, setSidebar] = useState(false)
    const [sidebarDropdown, setSidebarDropdown] = useState(false)
    return (
        <div className="abssidebar">
            <div className="sidebarInput">
                <i className="searchIcon fa fa-search"></i>
                <input type="text" placeholder="Search" /> 
            </div>
            <div className="sidebarWrapper">
                <ul className="sidebarItem">
                    <li className="sidebarItemList1" onClick={() => setSidebarDropdown(!sidebarDropdown)}><i className="sidbarDropIcon fas fa-university"></i> Institution <i className={sidebarDropdown? 'chev fas fa-chevron-up' : "chev fas fa-chevron-down"}></i></li>
                    <ul className={sidebarDropdown ? "dropdownList" : "drop"}>
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
