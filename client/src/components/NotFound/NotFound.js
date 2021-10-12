import "./notfound.css"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"

const NotFound = () => {
    const location = useLocation()
    const params = location.pathname.split("/")[1]
    console.log(params);
    return (
        <div className="notfound">
            <div className="opps">Opps!! can't find the page <div className="params">{params}.</div></div>
            <div className="notfoundContainer">
            </div>
            <div className="notBack">
                <Link to="/" className="backTohome">
                   Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
