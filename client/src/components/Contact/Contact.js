import { useRef} from "react"
import emailjs from 'emailjs-com';
import axios from 'axios'
import "./contact.css"


const Contact = () => {
    const name = useRef()
    const email = useRef()
    const subject = useRef()
    const message = useRef()

    const form = useRef();


    const handleSubmit = async (e) =>{
        e.preventDefault();
        const mail = {
            name: name.current.value,
            email: email.current.value,
            subject: subject.current.value,
            message: message.current.value,
        }
        try {
            await axios.post('http://localhost:5000/api/contact', mail)
            emailjs.sendForm('service_0xatvja', 'template_wb3necp', form.current, 'user_YQWZkeXOumjrAgisVJEqI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            console.log(mail);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="contact">
            <div className="contactContainer">
                <div className="contactLeftside">
                    <form onSubmit={handleSubmit}>
                        <div className="contactIOne">
                            <div className="contactInputIitems">
                                <label>Full Name</label>
                                <input type="text" placeholder="Name" required ref={name} name="name" />
                            </div>
                            <div className="contactInputIitems">
                                <label>Email Address</label>
                                <input type="email" placeholder="Email" required ref={email} name="email"  />
                            </div>
                        </div>
                        <div className="contactInputIitem">
                            <label>Subject</label>
                            <input type="text" placeholder="Subject" required  ref={subject} name="subject" />
                        </div>
                        <div className="contactInputIitem">
                            <label>Message</label>
                            <textarea placeholder="Message" required ref={message} name="message" ></textarea>
                        </div>
                        <button type="submit" className="contactSender">Send Message</button>
                    </form>
                </div>
                <div className="contactRightSide">
                </div>
            </div>
        </div>
    )
}

export default Contact
