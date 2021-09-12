import "./first.css"
import Topbar from '../topbar/Topbar'
import { Link } from 'react-router-dom'

const First = () => {
    return (
        <div className='first'>
            <Topbar />
            <div className="firstContainer">
                <h1>Mevick Bilingual Grammer School</h1>
                <h4>Knowledge-Hardwork-Success</h4>
                <Link to="/about">
                   <button>Learn More</button>
                </Link>
            </div>
        </div>
    )
}

export default First
