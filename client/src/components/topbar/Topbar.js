import React, { useState } from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Topbar = () => {

  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className='topbar'>
      <div className="topbarLeft">
        <img src={logo} alt="" />
        <h3>MEVICK</h3>
      </div>
      <div className="topbarRight">
        <ul className={isMobile ? "topbarLinks__Moblie" : "topbarLinks"}
         onClick={() => setIsMobile(false)} >
          <Link to="/" className="myabout">
          <li className="topbarRightLinks">Home</li>
          </Link>
          <Link to="/about" className="myabout">
            <li className="topbarRightLinks">About</li>
          </Link>
          <Link to="/contact" className="myabout"> 
               <li className="topbarRightLinks">Contact</li>
          </Link>
          <Link to="/blog" className="myabout"> 
               <li className="topbarRightLinks">News</li>
          </Link>
        </ul>
      </div>
      <div className="topbarProfile">
        <img src={logo} alt="" className="topbarProfilePic"/>
      </div>
      <button className="topbarMenuIcon" onClick={() => 
        setIsMobile(!isMobile)}>
        {isMobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> }
      </button>
    </div>
  )
}

export default Topbar
