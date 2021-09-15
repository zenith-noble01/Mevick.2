import "./notifications.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Nofications from "../../components/notificaitions/Nofications"

const Notification = () => {
    return (
        <div className="notications">
            <div className="notificationContainer">
                <Sidebar />
                <Nofications />
            </div>
        </div>
    )
}

export default Notification
