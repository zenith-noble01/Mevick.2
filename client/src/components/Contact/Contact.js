import { useRef} from "react"
import "./contact.css"
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Contact = () => {
    const name = useRef()
    const email = useRef()
    const phone = useRef()
    const message = useRef()


    const handleSubmit = async (e) =>{
        e.preventDefault();

        const mail = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            message: message.current.value,
        }
        console.log(mail);
        try {
            await axios.post('http://localhost:7000/api/contact', mail)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="contact">
            <div className="contactLeft">
                <div className="contactLeftInfo">
                    <img src={logo} alt="" />
                    <span className="LogoDes">Mevick</span>
                </div>
                <p>Greetings Sir/Madame All the fields 👉  are require for the information you are about to send and not most importantly your <b>Phone Number</b> is highly required because is it will be use to reply to your message.</p>
                <Link to="/">
                    <button className="backToHome">Back to Home</button>
                </Link>
            </div>
            <form className="contactRight" onSubmit={handleSubmit}>
                <div className="username">
                    <input type="text" placeholder="Username" ref={name}/>
                </div>
                <div className="username">
                    <input type="text" placeholder="Email Address" ref={email}/>
                </div>
                <div className="username">
                    <input type="phone" placeholder="Phone Number" ref={phone}/>
                </div>
                <div className="usernameMessage">
                    <textarea placeholder="Message" ref={message}></textarea>
                </div>
                <div className="btn">
                    <button className="rightBtn" type="submit">send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact
