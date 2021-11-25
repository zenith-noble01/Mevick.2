import React from 'react'
import Visibility from '@material-ui/icons/Visibility'
import './win.css'
import { Link } from "react-router-dom";

const Win = ({student}) => {
  const PF = "https://mevick-moon.herokuapp.com/images/"
    return (
        <div>
            <ul className="winsmLink">
                <li className="winsmLinkItem">
                    <img src={PF + student.img} alt="" className="winsmImg"/>
                    <div className="winsmUserToken">
                        <span className="winsmUserName">{student.name}</span>
                        <span className="winsmUserProffession">{student.class}</span>
                    </div>
                    <Link to={"/students/" + student.id} className="td">
                    <button className="winNet">
                        <Visibility className="winNetIcons"/> Display   
                    </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Win
