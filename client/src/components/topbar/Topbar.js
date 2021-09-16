import React, { useState } from 'react'
import "./topbar.css"
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

const Topbar = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [drop, setDrop] = useState(true)

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
          <NavLink to="/about" className="myabout">
            <li className="topbarRightLinks" onClick={() => setIsMobile(false)}>About</li>
          </NavLink>
          <NavLink to="/contact" className="myabout"> 
               <li className="topbarRightLinks" onClick={() => setIsMobile(false)}>Contact</li>
          </NavLink>
          <NavLink to="/blog" className="myabout"> 
               <li className="topbarRightLinks" onClick={() => setIsMobile(false)}>News</li>
          </NavLink>
          <div className="notnow">
           <li className="topbarProfileList" onClick={() => setDrop(!drop)}>Register</li>
          <ul className={drop ? "dropListLogin" : 'dropList'} onClick={() => setDrop(true)}>
            <NavLink to="/adminLogin" className="myaboutl">
            <li className="dropListItem">Admin</li>
            </NavLink>
            <li className="dropListItem">Student</li>
          </ul>
          </div>
        </ul>
      </div>
      <div className="topbarProfile">
          <li className="topbarProfileList" onClick={() => setDrop(!drop)}>Register</li>
          <ul className={drop ? "dropListLogin" : 'dropList'} >
            <Link to="/adminLogin" className="myaboutl">
            <li className="dropListItem">Admin</li>
            </Link>
            <li className="dropListItem">Student</li>
          </ul>
      </div>
      <button className="topbarMenuIcon" onClick={() => 
        setIsMobile(!isMobile)}>
        {isMobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> }
      </button>
    </div>
  )
}

export default Topbar
