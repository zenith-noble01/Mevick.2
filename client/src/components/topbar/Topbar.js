import React, { useState } from 'react'
import "./topbar.css"
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { RiMenu3Line } from "react-icons/ri"

const Topbar = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [drop, setDrop] = useState(true);
  const [application, setApplication] = useState(false)

  return (
    <div className='topbar'>
      <div className="topbarLeft">
        <img src={logo} alt="" />
        <h3>MEVICK</h3>
      </div>
      <div className="topbarRight">
        <ul className={isMobile ? "topbarLinks__Moblie" : "topbarLinks"} >
          <NavLink exact to="/" className="myabout">
            <li className="topbarRightLinks"  onClick={() => setIsMobile(false)}>Home</li>
          </NavLink>
          <NavLink to="/about/library" className="myabout">
            <li className="topbarRightLinks" onClick={() => setIsMobile(false)}>About</li>
          </NavLink>
          <div className="application">
            <li className="topbarRightLinks" onClick={() => setApplication(!application)}>Apply</li>
            <ul className={application ? "showList" : "showhide"}>
            <NavLink to="/admission" className="myabout">
              <li className="applicationItem" onClick={() => setApplication(false)} >Admission</li>
            </NavLink>
            <hr />
            <NavLink to="/Jobs" className="myabout">
              <li className="applicationItem" onClick={() => setApplication(false)}>Jobs</li>
            </NavLink>
            </ul>
          </div>
          <NavLink to="/contact" className="myabout"> 
              <li className="topbarRightLinks" onClick={() => setIsMobile(false)}>Contact</li>
          </NavLink>
          <NavLink to="/blog" className="myabout"> 
              <li className="topbarRightLinks" onClick={() => setIsMobile(false)}>News</li>
          </NavLink>
          <div className="notnow">
          <li className="topbarProfileList" onClick={() => setDrop(!drop)}>Login</li>
          <ul className={drop ? "dropListLogin" : 'dropList'} onClick={() => setDrop(true)}>
            <NavLink to="/ParentsLogin" className="myaboutl">
            <li className="dropListItem">Parent</li>
            </NavLink>
            <li className="dropListItem">Teacher</li>
            <li className="dropListItem">Student</li>
          </ul>
          </div>
        </ul>
      </div>
      <div className="topbarProfile">
          <li className="topbarProfileList" onClick={() => setDrop(!drop)}>Login</li>
          <ul className={drop ? "dropListLogin" : 'dropList'} >
            <Link to="/ParentsLogin" className="myaboutl">
            <li className="dropListItem" onClick={()=> setDrop(true)}>Parent</li>
            </Link>
            <li className="dropListItem" onClick={()=> setDrop(true)}>Teacher</li>
            <li className="dropListItem" onClick={()=> setDrop(true)}>Student</li>
          </ul>
      </div>
      <button className="topbarMenuIcon" onClick={() => 
        setIsMobile(!isMobile)}>
        {isMobile ? <i className="fa fa-times"></i> : <RiMenu3Line className="menubars"/> }
      </button>
    </div>
  )
}

export default Topbar
