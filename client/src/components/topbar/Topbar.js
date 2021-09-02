import "./topbar.css"
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarLeft">
        <img src={logo} alt="" />
        <h3>MEVICK</h3>
      </div>
      <div className="topbarRight">
        <ul className="topbarLinks">
          <li className="topbarRightLinks">Home</li>
          <Link to="/about" className="myabout">
            <li className="topbarRightLinks">About</li>
          </Link>
          <li className="topbarRightLinks">Contact</li>
        </ul>
      </div>
      <div className="topbarProfile">
        <img src={logo} alt="" className="topbarProfilePic"/>
      </div>
    </div>
  )
}

export default Topbar
