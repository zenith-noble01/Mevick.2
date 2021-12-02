import './footer.css'
import mevick from "../images/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <footer className="footer">
            <div className="row">
                <div className="col">
                    <div className="colTainer">
                        <img src={mevick} alt="" />
                        MEVICK
                    </div>
                    <p className="colP">Mevick Bilingual Grammer School</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sapiente odit nulla aspernatur numquam, excepturi vero ut! Iste, blanditiis quas.</p>
                </div>
                <div className="col">
                    <h3 className="colhead">Office</h3>
                        <p className="address">Apres Centre</p>
                        <p className="address">zed Miles</p>
                        <p className="address">Pteco, Yaounde, Cameroon</p>
                        <p className="email_id">zenithnoble354@gmail.com</p>
                        <h4>+237 653 43 95 74</h4>
                </div>
                <div className="col">
                    <h3 className="colhead">Links</h3>
                    <ul className="colLinks" >
                        <Link exact to="/" className="myabout">
                            <li className="colNavLinks" >Home</li>
                        </Link>
                        <Link to="/about/library" className="myabout">
                            <li className="colNavLinks">About</li>
                        </Link>
                        <Link to="/admission" className="myabout">
                            <li className="colNavLinks">Register</li>
                        </Link>
                        <Link to="/contact" className="myabout"> 
                            <li className="colNavLinks">Contact</li>
                        </Link>
                        <Link to="/blog" className="myabout"> 
                            <li className="colNavLinks">News</li>
                        </Link>
                    </ul>
                </div>
                <div className="col">
                    <h3 className="colhead">News Letter</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="inputTainer">
                            <i className="colFoot fa fa-user"></i>
                            <input type="text" placeholder="Username" className="colInput" required/>
                        </div>
                        <div className="inputTainer">
                            <i className="colFoot fa fa-envelope"></i>
                            <input type="email" placeholder="Email"  className="colInput" required />
                        </div>
                        <div className="inputTainer">
                            <i className="colFoot fa fa-phone-alt"></i>
                            <input type="text" placeholder="Phone"  className="colInput" required />
                        </div>
                        <button type="submit" className="colBtn">Send</button>
                    </form>
                </div>
            </div>
            <hr className="mainhr"/>
            <div className="fotdec">
                <p>
                    <Link to="/AdminLogin" className="copright">Copyright © </Link>PTECO 2021, All rights reserved.

                </p>
            </div>
        </footer>
    )
}

// no time to die
// y the last man
// the expandables 3
// the mechanic

// import * as React from 'react';
// import { useState } from 'react';
// import ReactMapGL from 'react-map-gl';

// function Map() {
//   const [viewport, setViewport] = useState({
//     width: 400,
//     height: 400,
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8
//   });

//   return (
//     <ReactMapGL
//       {...viewport}
//       onViewportChange={nextViewport => setViewport(nextViewport)}
//     />
//   );
// }
export default Footer