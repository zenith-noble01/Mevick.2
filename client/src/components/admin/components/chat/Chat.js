import "./chat.css"
import parent from '../../../images/secon1.jpg'

const Chat = ({message}) => {
    return (
        <div className="mess">
            <img src={parent} alt="mevick" className="messImg"  />
            <div className="messContent">
                <p className="messName">{message.name}</p>
                <p className="messDec">{message.message}</p>
            </div>
        </div>
    )
}

export default Chat
