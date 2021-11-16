import "./what.css"
import Zoom  from "react-reveal/Zoom"

const what = () => {
    return (
        <div className="what">
            <div className="whatHeader">
                <h4>What we Offer</h4>
            </div>
            <div className="whatContainer">
                <Zoom right>
                    <div className="cont">
                        <p className="title">Nursery Section</p>
                        <p>
                            Mevick Nursery School aims to provide high quality care and education for children and a secure foundation for learning in an encouraging and nurturing environment, where there is an equality of opportunity and support for all and where staff and parents or carers work in close partnership.
                        </p>
                    </div>
                    <div className="cont">
                        <p className="title">Primary Section</p>
                        <p>
                        The objectives of primary schools today and in the future necessitate children to be critically literate so that they can fuse information, make informed decisions, and communicate capably to prosper in an ever-changing world.
                        </p>
                    </div>
                    <div className="cont">
                        <p className="title">General/Commercial Section</p>
                        <p>
                            General Education provides students with transferrable skills that prepare them to gain knowledge, acquire new competencies, and broaden their perspectives so that they may better adapt to the needs of a changing society.
                        </p>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default what
