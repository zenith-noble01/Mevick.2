import "./Atopbar.css"
import logo from '../../../images/logo.png'
// import { Link } from 'react-router-dom'


const Topbar = () => {
  return (
    <div className='Atopbar'>
      <div className="AtopbarLeft">
        <img src={logo} alt="" />
        <h3>MEVICK DASHBORD</h3>
      </div>
      <div className="AtopbarProfile">
        <img src={logo} alt="" className="AtopbarProfilePic"/>
      </div>
    </div>
  )
}

export default Topbar
