import "./notifications.css"
import Atopbar from '../../components/Atopbar/ATopbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Nofications from "../../components/notificaitions/Nofications"

const Notification = () => {
    return (
        <div className="notications">
            <Atopbar />
            <div className="notificationContainer">
                <Sidebar />
                <Nofications />
            </div>
        </div>
    )
}

export default Notification
