import React, { useState, useEffect } from 'react'
import './message.css'
import Chat from '../chat/Chat'
import ChatContent from '../chatcontent/ChatContent'
import axios from 'axios'


const Message = () =>{

    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState(null)

    useEffect(() =>{
        const getMessage = async () => {
            try {
                const res = await axios.get("https://mevback.herokuapp.com/api/contact")
                setMessages(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getMessage()
    },[])
    return(
        <div className="messageContainer">
            <div className="messageWrapper">
                <div className="messageSidebar">
                    {messages.map(m =>(
                        <div className="currentmess" onClick={()=> setCurrentMessage(m)}>
                            <Chat message={m} />
                        </div>
                    ))}
                </div>
                <div className="messageContent">
                    { currentMessage ? 
                    <div className="messageContentWrapper">
                        <ChatContent message={currentMessage} setCurrentMessage={setCurrentMessage} />
                    </div> : <div className="noChatYet">
                        <span>select a chat Admin</span>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default Message