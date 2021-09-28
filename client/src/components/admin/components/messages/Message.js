import './message.css'
import parent from '../../../images/secon1.jpg'


const Message = () =>{
    return(
        <div className="messageContainer">
            <div className="messageWrapper">
                <div className="messageSidebar">
                    <div className="mess">
                        <img src={parent} alt="mevick" className="messImg"  />
                        <div className="messContent">
                            <p className="messName">Zenith Noble</p>
                            <p className="messDec">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt nostrum, repellat aliquid dolores ut officiis excepturi facilis soluta, ex eius unde sunt, similique itaque repellendus id </p>
                            
                        </div>
                    </div>
                </div>
                <div className="messageContent">
                    the message content
                </div>
            </div>
        </div>
    )
}


export default Message