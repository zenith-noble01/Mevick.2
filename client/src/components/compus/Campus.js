import "./campus.css"
import img from '../images/logo.png'

const Campus = () => {
    return (
        <div className="campus">
           <h4>Campus</h4>
           <div className="campusContainer">
               <div className="campusCont">
                   <img src={img} alt="" />
                   <div className="div">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi dolorem ab sequi hic praesentium, qui libero, porro quidem atque ipsa corrupti odit cum ut accusamus eveniet optio quod aspernatur?</p>
                   </div>
               </div>
               <div className="campusCont">
                   <img src={img} alt="" />
                   <div className="div">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi dolorem ab sequi hic praesentium, qui libero, porro quidem atque ipsa corrupti odit cum ut accusamus eveniet optio quod aspernatur?</p>
                   </div>
               </div>
               <div className="campusCont">
                   <img src={img} alt="" />
                   <div className="div">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi dolorem ab sequi hic praesentium, qui libero, porro quidem atque ipsa corrupti odit cum ut accusamus eveniet optio quod aspernatur?</p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Campus
