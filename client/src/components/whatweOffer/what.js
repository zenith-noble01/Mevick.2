import "./what.css"
import { Fade } from "react-reveal"

const what = () => {
    return (
        <div className="what">
            <h4>What we Offer</h4>
            <div className="whatContainer">
                <Fade right>
                <div className="cont">
                    <p className="title">Nursery Section</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt nostrum, repellat aliquid dolores ut officiis excepturi facilis soluta, ex eius unde sunt, similique itaque repellendus id voluptatum qui mollitia maxime quasi molestiae animi aut totam. Odit pariatur omnis enim?</p>
                </div>
                <div className="cont">
                    <p className="title">Primary Section</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt nostrum, repellat aliquid dolores ut officiis excepturi facilis soluta, ex eius unde sunt, similique itaque repellendus id voluptatum qui mollitia maxime quasi molestiae animi aut totam. Odit pariatur omnis enim?</p>
                </div>
                <div className="cont">
                    <p className="title">General/Commercial Section</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt nostrum, repellat aliquid dolores ut officiis excepturi facilis soluta, ex eius unde sunt, similique itaque repellendus id voluptatum qui mollitia maxime quasi molestiae animi aut totam. Odit pariatur omnis enim?</p>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default what
