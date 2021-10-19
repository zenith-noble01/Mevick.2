import "./classlive.css"


const ClassLive = ({setCall, call}) => {
    return (
        <div className="classLive">
            <div className="diogtha">
                <button className="diogthadClick" onClick={() => setCall(!call)}>zenith</button>
            </div>
        </div>
    )
}

export default ClassLive
