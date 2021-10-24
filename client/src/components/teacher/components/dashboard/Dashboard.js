import "./dashboard.css"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashtop">
                <p>welcome Mr/Mrs<span>Zenith Noble</span></p>
            </div>
            <div className="dashContainer">
                <div className="dashNoticeBoard">
                    <div className="dashNoticeTop">
                        <h5>NoticeBoard</h5>
                    </div>
                    <div className="notivecontainer">
                        <p>No Notive yet</p>
                    </div>
                </div>
                <div className="dashDetails">
                    <div className="dashdetailstop">
                        <h5>Your Details</h5>
                    </div>
                    <div className="detailsContainer">
                        <p>Name : <span>Zenith Noble</span></p>
                        <p>ID: <span>45678907654323456</span></p>
                        <p>Session: <span>2021-2022</span></p>
                        <p>Classes: <span>LSS</span></p>
                        <p>Roll: <span>Teacher</span>  </p>
                        <p>Section: <span>Anglohone</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
