import "./abssidebar.css"
import { useState } from "react"
import {useRouteMatch, Link, Route, Switch} from 'react-router-dom'
import Library from '../library/Library'
import Labs from '../labs/Labs'
import Fields from '../fields/Fields'
import Cantine from '../cantine/Cantine'
import Overview from '../overview/Overview'
import Administrative from '../administrative/Administrative'
import Security from '../security/Security'
import Coperative from '../coperative/Coperative'
import Decipline from '../decipline/Decipline'

const AbSidebar = () => {
    const {path, url} = useRouteMatch()
    const [sidebarDropdown, setSidebarDropdown] = useState(false)
    const [school, setSchool] = useState(false)
    const [active] = useState(false)
    return (
        <div className="miles">
        <div className={active ? "abssidebarMobile" : "abssidebar"}>
            
            {/* <div className="sidebarInput">
                <i className="searchIcon fa fa-search"></i>
                <input type="text" placeholder="Search" /> 
            </div> */}
            <div className="sidebarWrapper">
                <ul className="sidebarItem">
                    <li className={sidebarDropdown ? "sidebarItemList1" : "inactive"} onClick={() => setSidebarDropdown(!sidebarDropdown)}><i className="sidbarDropIcon fas fa-university"></i> Institution <i className={sidebarDropdown? 'chev fas fa-chevron-up' : "chev fas fa-chevron-down"}></i></li>
                    <ul className={sidebarDropdown ? "dropdownList" : "drop"}>
                        <li className="dropdownItem"><i className="sidbarDropIcon fas fa-book-open"></i>
                        <Link to={`${url}/library`} className="link">Library</Link>
                        </li>
                        <li className="dropdownItem"><i className="sidbarDropIcon fas fa-flask"></i>
                        <Link to={`${url}/labs`} className="link">Labs</Link>
                        </li>
                        <li className="dropdownItem"><i className="sidbarDropIcon fas fa-shield-alt"></i>
                        <Link to={`${url}/fields`} className="link">Fields</Link>
                        </li>
                        <li className="dropdownItem"><i className="sidbarDropIcon fas fa-cookie-bite"></i>
                         <Link to={`${url}/cantine`} className="link">Cantine</Link>
                        </li>
                        <li className="dropdownItem"><i className="sidbarDropIcon fas fa-binoculars"></i>
                        <Link to={`${url}/overview`} className="link">Overview</Link>
                        </li>
                    </ul> 
                    <li className={school ? "sidebarItemList1" : "inactive"} onClick={() => setSchool(!school)}><i class="sidbarDropIcon fas fa-school"></i>School  <i className={school ? 'chev fas fa-chevron-up' : "chev fas fa-chevron-down"}></i></li> 
                        <ul className={school ? "dropdownList" : "drop"} >
                            <li className="dropdownItem">
                                <i class="sidbarDropIcon fas fa-users-cog"></i>
                                <Link to={`${url}/administrative`} className="link">Administrative Staff</Link>
                            </li>
                            <li className="dropdownItem"><i class="sidbarDropIcon fas fa-lock"></i>
                                <Link to={`${url}/security`} className="link">Security Staff</Link>
                            </li>
                            <li className="dropdownItem"><i class="sidbarDropIcon fas fa-layer-group"></i>
                                <Link to={`${url}/decipline`} className="link">Decipline Staff</Link>
                            </li>
                            <li className="dropdownItem"><i class="sidbarDropIcon fab fa-centos"></i>
                                <Link to={`${url}/coperative`} className="link">coperative Staff</Link>
                            </li>
                        </ul>
                    <li className="inactive">Past Result</li>
                    <li className="inactive">Location</li>
                    <li className="inactive">registration</li>
                </ul>
            </div>
        </div>
        <div className="activesidebar">
            <Switch>
                <Route path={`${path}/library`}>
                    <Library />
                </Route>
                <Route path={`${path}/labs`}>
                    <Labs />
                </Route>
                <Route path={`${path}/fields`}>
                    <Fields />
                </Route>
                <Route path={`${path}/cantine`}>
                    <Cantine />
                </Route>
                <Route path={`${path}/overview`}>
                    <Overview />
                </Route>
                <Route path={`${path}/administrative`}>
                    <Administrative />
                </Route>
                <Route path={`${path}/security`}>
                    <Security />
                </Route>
                <Route path={`${path}/decipline`}>
                    <Decipline />
                </Route>
                <Route path={`${path}/coperative`}>
                    <Coperative />
                </Route>
            </Switch>
            </div>
        </div>
    )
}

export default AbSidebar
