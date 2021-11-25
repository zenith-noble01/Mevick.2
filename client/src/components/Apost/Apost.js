import "./apost.css"
import logo from '../images/secon1.jpg'


const Apost = ({post}) => {
    const PF = 'https://mevick-moon.herokuapp.com/images/';
    setTimeout(() =>{
        console.log(post);
    }, 3000)
    return (
        <>
        {post && (<div className="apost">
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
        </div>)}

        {!post && <p>Looading</p>}
        </>
    )
}

export default Apost
