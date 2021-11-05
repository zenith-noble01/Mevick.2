import "./chatcontent.css"

const ChatContent = ({message, setCurrentMessage}) => {
    // console.log(message);
    return (
        <div className="chatContent">
            <i className="chatContentIcon fa fa-arrow-left" onClick ={() => setCurrentMessage(null)}></i>
            <div className="Chatitems">
                <p className="ContentName">{message.name}</p>
                <p className="ContentEmail">{message.email}</p>
                <p className="ContentPhone">{message.subject}</p>
                <p className="ContentMessage">{message.message}</p>
            </div>
        </div>
    )
}

export default ChatContent
