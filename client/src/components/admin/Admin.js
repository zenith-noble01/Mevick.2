import './admin.css'
import Sidebar from './components/sidebar/Sidebar'


const Admin = () => {
    return (
        <div className="admin">
            <div className="adminContainer">
                <Sidebar />
            </div>
            <div className="this">
                this feature is available only on Computer Desk Top OR laptop
            </div>
        </div>
    )
}

export default Admin
