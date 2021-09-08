import "./apost.css"
import logo from '../images/secon1.jpg'
const Apost = () => {
    return (
        <div className="apost">
            <div className="blogTop">
                <div className="blogToper">
                <div className="blogTopProfile">
                <img src={logo} alt="" />
                <span>Admin</span>
                </div>
                topbeKnow
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facilis animi tempore error omnis soluta ipsa exercitationem iste mollitia dolores dignissimos, cupiditate fuga quasi esse eaque nisi numquam eos sit!</p>
            </div>
            <div className="blogCenter">
                <img src={logo} alt="" className="blogCenterImg" />
            </div>
            <div className="blogbottom"></div>
        </div>
    )
}

export default Apost
