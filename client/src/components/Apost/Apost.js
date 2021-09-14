import "./apost.css"
import logo from '../images/secon1.jpg'
const Apost = ({post}) => {
    
    const PF = 'http://localhost:5000/images/';
    return (
        <div className="apost">
            <div className="blogTop">
                <div className="blogToper"> 
                <div className="blogTopProfile">
                <img src={logo} alt="" />
                <span>Admin</span>
                </div>
                <p className="postdate">{new Date(post.createdAt).toDateString()}</p>
                </div>
                <p>{post.desc}</p>
            </div>
            <div className="blogCenter">
                <img src={PF + post.img} alt="" className="blogCenterImg" />
            </div>
            <div className="blogbottom"></div>
        </div>
    )
}

export default Apost
