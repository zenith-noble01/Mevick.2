import "./campus.css"
import primary from '../images/primary.jpg'
import nursery from '../images/nursery2.jpg'
import secondary from '../images/secon3.jpg'
import commercial from '../images/secon2.jpg'
import Fade from 'react-reveal'

const Campus = () => {
    return (
        <div className="campus">
            <h4>Campus</h4>
            <div className="campusContainer">
                <Fade left>
                    <div className="campusCont">
                        <img src={nursery} alt="" />
                        <div className="div">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi dolorem ab sequi hic praesentium, qui libero, porro quidem atque ipsa corrupti odit cum ut accusamus eveniet optio quod aspernatur?</p>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="campusCont">
                        <img src={primary} alt="" />
                        <div className="div">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi dolorem ab sequi hic praesentium, qui libero, porro quidem atque ipsa corrupti odit cum ut accusamus eveniet optio quod aspernatur?</p>
                        </div>
                    </div>
                </Fade>
                <Fade top>
                    <div className="campusCont">
                        <img src={secondary} alt="" />
                        <div className="div">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi dolorem ab sequi hic praesentium, qui libero, porro quidem atque ipsa corrupti odit cum ut accusamus eveniet optio quod aspernatur?</p>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="campusCont">
                        <img src={commercial} alt="" />
                        <div className="div">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi dolorem ab sequi hic praesentium, qui libero, porro quidem atque ipsa corrupti odit cum ut accusamus eveniet optio quod aspernatur?</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Campus
