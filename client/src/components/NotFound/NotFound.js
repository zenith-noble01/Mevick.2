import "./notfound.css"
import { useParams } from "react-router"
import logo from '../images/logo.png'

const NotFound = () => {
    const params = useParams()
    return (
        <div className="notfound">
            <h1>404</h1>
            <div className="notfoundContainer">
                <img src={logo} alt="" />
               <p className="mev">Mevick Notfound</p>
            </div>
            <p>{JSON.stringify(params)}</p>
        </div>
    )
}

export default NotFound
