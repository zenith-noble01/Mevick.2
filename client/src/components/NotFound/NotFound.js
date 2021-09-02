import "./notfound.css"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import logo from '../images/logo.png'

const NotFound = () => {
    const params = useParams()
    return (
        <div className="notfound">
            <h1>404</h1>
            <div className="notfoundContainer">
                <img src={logo} alt="" className="notfoundImg"/>
               <p className="mev">Mevick Notfound</p>
            </div>
            <p>{JSON.stringify(params)}</p>
            <div className="notBack">
                <Link to="/" className="backTohome">
                   Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
